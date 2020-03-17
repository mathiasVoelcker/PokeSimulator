using System.Collections.Generic;
using PokemonSimulation.Infra.Repositories;
using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Interfaces
{
    public interface IMoveRepository : IBaseRepository
    {
        IEnumerable<Moves> GetAll();
        
        void Create(Moves move);
    }
}