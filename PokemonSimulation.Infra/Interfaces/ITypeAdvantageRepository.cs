using System.Collections.Generic;
using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Interfaces
{
    public interface ITypeAdvantageRepository
    {

        IEnumerable<TypeAdvantage> GetByIdAttackingType(int idAttackingType);

        void Create(TypeAdvantage typeAdvantage);
    }
}