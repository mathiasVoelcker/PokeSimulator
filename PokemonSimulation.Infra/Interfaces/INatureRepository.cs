using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Interfaces
{
    public interface INatureRepository
    {
        void CreateNature(Natures nature);
    }
}