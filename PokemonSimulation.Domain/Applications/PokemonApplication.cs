using System;
using System.Collections.Generic;
using Microsoft.Extensions.Caching.Memory;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Infra;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;
using PokemonSimulation.Models.Adapters;
using PokemonSimulation.Models.DTOs;
using PokemonSimulation.Models.Exceptions;

namespace PokemonSimulation.Domain.Applications
{
    public class PokemonApplication : IPokemonApplication
    {
        private readonly IPokemonRepository _pokemonRepository;
        private readonly IPokemonSpeciesRepository _pokemonSpeciesRepository;
        private readonly IMoveRepository _moveRepository;
        private readonly INatureRepository _natureRepository;
        private readonly CacheDomain _cacheDomain;

        public PokemonApplication(
            IPokemonRepository pokemonRepository,
            IPokemonSpeciesRepository pokemonSpeciesRepository,
            IMoveRepository moveRepository,
            INatureRepository natureRepository, CacheDomain cacheDomain)
        {
            _pokemonRepository = pokemonRepository;
            _pokemonSpeciesRepository = pokemonSpeciesRepository;
            _moveRepository = moveRepository;
            _natureRepository = natureRepository;
            _cacheDomain = cacheDomain;
        }

        public List<PokemonDto> GetAll(int idUser)
        {
            var listPokemonsDto = new List<PokemonDto>();
            var listPokemons = _pokemonRepository.GetByUser(idUser);

            foreach (var pokemon in listPokemons)
            {
                listPokemonsDto.Add(pokemon.ToDto(isSimple: true));
            }
            return listPokemonsDto;
        }

        public List<PokemonDto> GetAllInCache()
        {
            List<PokemonDto> listPokemonDto;
            _cacheDomain.Cache.TryGetValue("Pokemons", out listPokemonDto);
            return listPokemonDto;
        }

        public PokemonDto GetById(int id, int idUser)
        {
            var pokemon = _pokemonRepository.GetById<Pokemons>(id);
            if (pokemon.Id_User != idUser) throw new DomainException("This pokemon belongs to someone else!");
            pokemon.Pokemon_Species = _pokemonSpeciesRepository.GetById(pokemon.Id_Pokemon_Species);

            if (pokemon.Id_Move_1 != null)
                pokemon.Move1 = _moveRepository.GetById<Moves>(pokemon.Id_Move_1.Value);
            if (pokemon.Id_Move_2 != null)
                pokemon.Move2 = _moveRepository.GetById<Moves>(pokemon.Id_Move_2.Value);
            if (pokemon.Id_Move_3 != null)
                pokemon.Move3 = _moveRepository.GetById<Moves>(pokemon.Id_Move_3.Value);
            if (pokemon.Id_Move_4 != null)
                pokemon.Move4 = _moveRepository.GetById<Moves>(pokemon.Id_Move_4.Value);
            
            pokemon.Nature = _natureRepository.GetById<Natures>(pokemon.Id_Nature);

            var pokemonDto = pokemon.ToDto();
            return pokemonDto;
        }

        public bool Save(PokemonDto pokemonDto)
        {
            pokemonDto.Validate();
            var pokemonModel = pokemonDto.ToModel();
            _pokemonRepository.Save(pokemonModel);
            return true;

        }

        public bool SaveInCache(PokemonDto pokemon)
        {
            AjustMovesNames(pokemon);
            List<PokemonDto> listPokemonDto;
            _cacheDomain.Cache.TryGetValue("Pokemons", out listPokemonDto);
            if (listPokemonDto == null)
                listPokemonDto = new List<PokemonDto>();    
            pokemon.Id = listPokemonDto.Count + 1;
            listPokemonDto.Add(pokemon);
            _cacheDomain.Set("Pokemons", listPokemonDto);
            return true;
        }

        public bool Update(PokemonDto pokemon, int idUserLogged)
        {
            if (pokemon.User == null || pokemon.User.Id != idUserLogged) 
                throw new DomainException("This pokemon belongs to someone else!");
            _pokemonRepository.Update(pokemon.ToModel());
            return true;
        }

        public bool Delete(int pokemonId, int idUserLogged)
        {
            var pokemon = _pokemonRepository.GetById<Pokemons>(pokemonId);
            if (pokemon.Id_User != idUserLogged) throw new DomainException("This pokemon belongs to someone else!");
            _pokemonRepository.Delete(pokemon);
            return true;
        }

        private void AjustMovesNames(PokemonDto pokemonDto)
        {
            if (pokemonDto.Move1 != null)
                pokemonDto.Move1.Name = pokemonDto.Move1.Name.Split('-')[0];
            if (pokemonDto.Move2 != null)                
                pokemonDto.Move2.Name = pokemonDto.Move2?.Name.Split('-')[0];
            if (pokemonDto.Move3 != null)
                pokemonDto.Move3.Name = pokemonDto.Move3?.Name.Split('-')[0];
            if (pokemonDto.Move4 != null)
                pokemonDto.Move4.Name = pokemonDto.Move4?.Name.Split('-')[0];
        }
    }
}