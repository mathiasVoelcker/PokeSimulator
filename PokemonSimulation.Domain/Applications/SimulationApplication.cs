using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Caching.Memory;
using PokemonSimulation.Domain.Helpers;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Infra;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;
using PokemonSimulation.Models.Adapters;
using PokemonSimulation.Models.DTOs;
using PokemonSimulation.Models.Enums;

namespace PokemonSimulation.Domain.Applications
{
    public class SimulationApplication : ISimulationApplication
    {
        private readonly IPokemonRepository _pokemonRepository;
        private readonly IMoveRepository _moveRepository;
        private readonly ITypeAdvantageRepository _typeAdvantageRepository;
        private readonly CacheDomain _cacheDomain;

        public SimulationApplication(
            IPokemonRepository pokemonRepository, 
            IMoveRepository moveRepository, 
            ITypeAdvantageRepository typeAdvantageRepository,
            CacheDomain cacheDomain)
        {
            _pokemonRepository = pokemonRepository;
            _moveRepository = moveRepository;
            _typeAdvantageRepository = typeAdvantageRepository;
            _cacheDomain = cacheDomain;
        }

        public SimulationReturnDto GetMoveDamage(SimulationDto simulationDto)
        {
            //GET DATA
            var attackingPokemon = _pokemonRepository.GetById<Pokemons>(simulationDto.AttackingPokemonId);
            var defendingPokemon = _pokemonRepository.GetById<Pokemons>(simulationDto.DefendingPokemonId);
            var move = _moveRepository.GetById<Moves>(simulationDto.MoveId);
            attackingPokemon.Pokemon_Species = _pokemonRepository.GetById<Pokemon_Species>(attackingPokemon.Id_Pokemon_Species);
            defendingPokemon.Pokemon_Species = _pokemonRepository.GetById<Pokemon_Species>(defendingPokemon.Id_Pokemon_Species);
            var listTypeAdvantage = _typeAdvantageRepository.GetByIdAttackingType(move.Id_Type);
            
            //GET TYPES ADVANTAGES
            var firstTypeAdvantage = listTypeAdvantage.FirstOrDefault(x => x.DefendingType.Id == defendingPokemon.Pokemon_Species.First_Type_Id);
            var secondTypeAdvantage = listTypeAdvantage.FirstOrDefault(x => x.DefendingType.Id == defendingPokemon.Pokemon_Species.Second_Type_Id);

            //SET CALCULATOR
            var simulationCalc = new SimulationCalc(
                attackerLevel: attackingPokemon.Level,
                moveBasePower: move.Base_Power,
                attackingStat: move.Move_Category == MoveCategoryEnum.Physical ? attackingPokemon.Attack : attackingPokemon.Sp_Attack,
                defendingStat: move.Move_Category == MoveCategoryEnum.Physical ? defendingPokemon.Defense : defendingPokemon.Sp_Defense,
                modifier: simulationDto.Modifier);
            var hasStab = attackingPokemon.Pokemon_Species.First_Type_Id == move.Id_Type 
                || attackingPokemon.Pokemon_Species.Second_Type_Id == move.Id_Type;
            
            var typeEffect = secondTypeAdvantage == null ? firstTypeAdvantage.Effect : firstTypeAdvantage.Effect * secondTypeAdvantage.Effect;
            simulationCalc.AddTypesDataToModifier(hasStab, typeEffect);

            var damage = simulationCalc.CalculateDamage();

            return new SimulationReturnDto() { Damage = damage, EffectDecimal = typeEffect };
        }

        public int GetMoveDamageInCache(SimulationDto simulationDto)
        {
            //GET DATA
            List<PokemonDto> listPokemonDto;
            _cacheDomain.Cache.TryGetValue("Pokemons", out listPokemonDto);
            var attackingPokemon = listPokemonDto.FirstOrDefault(x => x.Id == simulationDto.AttackingPokemonId);
            var defendingPokemon = listPokemonDto.FirstOrDefault(x => x.Id == simulationDto.DefendingPokemonId);
            var move = _moveRepository.GetById<Moves>(simulationDto.MoveId);
            attackingPokemon.PokemonSpecies = _pokemonRepository.GetById<Pokemon_Species>(attackingPokemon.PokemonSpecies.Id).ToDto();
            defendingPokemon.PokemonSpecies = _pokemonRepository.GetById<Pokemon_Species>(defendingPokemon.PokemonSpecies.Id).ToDto();
            var listTypeAdvantage = _typeAdvantageRepository.GetByIdAttackingType(move.Id_Type);
            
            //GET TYPES ADVANTAGES
            var firstTypeAdvantage = listTypeAdvantage.FirstOrDefault(x => x.DefendingType.Id == defendingPokemon.PokemonSpecies.FirstType.Id);
            var secondTypeAdvantage = listTypeAdvantage.FirstOrDefault(x => x.DefendingType.Id == defendingPokemon.PokemonSpecies.SecondType?.Id);

            //SET CALCULATOR
            var simulationCalc = new SimulationCalc(
                attackerLevel: attackingPokemon.Level,
                moveBasePower: move.Base_Power,
                attackingStat: move.Move_Category == MoveCategoryEnum.Physical ? attackingPokemon.Attack : attackingPokemon.SpAttack,
                defendingStat: move.Move_Category == MoveCategoryEnum.Physical ? defendingPokemon.Defense : defendingPokemon.SpDefense,
                modifier: simulationDto.Modifier);
            var hasStab = attackingPokemon.PokemonSpecies.FirstType.Id == move.Id_Type 
                || attackingPokemon.PokemonSpecies.SecondType?.Id == move.Id_Type;

            var typeEffect = secondTypeAdvantage == null ? firstTypeAdvantage.Effect : firstTypeAdvantage.Effect * secondTypeAdvantage.Effect;
            
            simulationCalc.AddTypesDataToModifier(hasStab, typeEffect);

            return simulationCalc.CalculateDamage();
        }
    }
}