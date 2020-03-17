using System.Collections.Generic;
using System.Threading.Tasks;
using PokemonSimulation.Models;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Infra.Interfaces
{
    public interface IPokemonSpeciesRepository
    {

        IEnumerable<Pokemon_Species> GetByName(string name);

        Pokemon_Species GetById(int id);

        void Create(Pokemon_Species pokemon_species);
    }
}