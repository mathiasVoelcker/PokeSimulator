using Dapper;
using PokemonSimulation.Infra.Database;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Repositories
{
    public class MoveRepository : BaseRepository, IMoveRepository
    {
        public MoveRepository(DbSession dbSession) : base(dbSession) { }

        public void Create(Moves move)
        {
            using (var conn = NewConnection)
            {
                conn.Insert(move);
            }
        }
    }
}