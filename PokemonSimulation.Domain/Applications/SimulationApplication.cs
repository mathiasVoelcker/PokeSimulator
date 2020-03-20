using System.Linq;
using PokemonSimulation.Domain.Helpers;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;
using PokemonSimulation.Models.DTOs;
using PokemonSimulation.Models.Enums;

namespace PokemonSimulation.Domain.Applications
{
    public class SimulationApplication : ISimulationApplication
    {
        private readonly IPokemonRepository _pokemonRepository;
        private readonly IMoveRepository _moveRepository;
        private readonly ITypeAdvantageRepository _typeAdvantageRepository;

        public SimulationApplication(IPokemonRepository pokemonRepository, IMoveRepository moveRepository, ITypeAdvantageRepository typeAdvantageRepository)
        {
            _pokemonRepository = pokemonRepository;
            _moveRepository = moveRepository;
            _typeAdvantageRepository = typeAdvantageRepository;
        }

        public int GetMoveDamage(SimulationDto simulationDto)
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
            simulationCalc.AddTypesDataToModifier(hasStab, firstTypeAdvantage.Effect * secondTypeAdvantage.Effect);

            return simulationCalc.CalculateDamage();
        }
    }
}