using Dapper;
using PokemonSimulation.Infra.Database;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Repositories


{
    public class NatureRepository : BaseRepository, INatureRepository
    {
        public NatureRepository(DbSession dbSession) : base(dbSession) { }

        public void CreateNature(Natures nature)
        {
            using (var conn = NewConnection)
            {
                conn.Insert(nature);
            }
        }
    }
}