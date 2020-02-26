using Dapper;
using PokemonSimulation.Infra.Database;
using PokemonSimulation.Infra.Database.Queries.TypesAdvantage;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Repositories
{
    public class TypeAdvantageRepository : BaseRepository, ITypeAdvantageRepository
    {
        public TypeAdvantageRepository(DbSession dbSession) : base(dbSession) { }

        public void Create(TypeAdvantage typeAdvantage)
        {
            using (var conn = NewConnection)
            {
                conn.Execute(Scripts.CreateTypeAdvantageSql, typeAdvantage);
            }
        }
    }
}