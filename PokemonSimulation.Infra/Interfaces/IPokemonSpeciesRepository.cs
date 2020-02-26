using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Interfaces
{
    public interface IPokemonSpeciesRepository
    {
         void Create(Pokemon_Species pokemon_species);
    }
}