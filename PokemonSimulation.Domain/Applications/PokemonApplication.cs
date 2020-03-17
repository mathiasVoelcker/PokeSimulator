using System.Collections.Generic;
using PokemonSimulation.Domain.Interfaces;
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

        public PokemonApplication(
            IPokemonRepository pokemonRepository,
            IPokemonSpeciesRepository pokemonSpeciesRepository, IMoveRepository moveRepository, INatureRepository natureRepository)
        {
            _pokemonRepository = pokemonRepository;
            _pokemonSpeciesRepository = pokemonSpeciesRepository;
            _moveRepository = moveRepository;
            _natureRepository = natureRepository;
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

        public bool SaveInCookie(PokemonDto pokemon)
        {
            throw new System.NotImplementedException();
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
    }
}