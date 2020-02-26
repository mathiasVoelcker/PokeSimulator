using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Interfaces
{
    public interface IMoveRepository
    {
        void Create(Moves move);
    }
}