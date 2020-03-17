using System.Collections.Generic;
using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Interfaces
{
    public interface INatureRepository : IBaseRepository
    {
        IEnumerable<Natures> GetAll();

        void CreateNature(Natures nature);
    }
}