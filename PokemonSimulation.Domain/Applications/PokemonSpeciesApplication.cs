using System.Collections.Generic;
using System.Linq;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models.Adapters;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Domain.Applications
{
    public class PokemonSpeciesApplication : IPokemonSpeciesApplication
    {

        private readonly IPokemonSpeciesRepository _pokemonSpeciesRep;

        private readonly ITypeRepository _typeRepository;

        private readonly ITypeAdvantageRepository _typeAdvantageRepository;

        public PokemonSpeciesApplication(
            IPokemonSpeciesRepository pokemonSpeciesRep,
            ITypeRepository typeRepository,
            ITypeAdvantageRepository typeAdvantageRepository) 
        { 
            _pokemonSpeciesRep = pokemonSpeciesRep;
            _typeRepository = typeRepository;
            _typeAdvantageRepository = typeAdvantageRepository;
        }

        public List<PokemonSpeciesDto> GetByName(string name)
        {
            var listPokemonsSpecies = _pokemonSpeciesRep.GetByName(name);
            var listPokemonsSpeciesDto = listPokemonsSpecies.ToList().Select(x => x.ToDto()).ToList();
            return listPokemonsSpeciesDto;
        }

        public PokemonSpeciesDto GetById(int id)
        {
            var pokemonSpecies = _pokemonSpeciesRep.GetById(id);
            var pokemonSpeciesDto = pokemonSpecies.ToDto();
            return pokemonSpeciesDto;
        }
    }
}