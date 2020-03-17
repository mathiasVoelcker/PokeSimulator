using System.Collections.Generic;
using Dapper;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Repositories
{
    public class MoveRepository : BaseRepository, IMoveRepository
    {
        public MoveRepository(IDbSession dbSession) : base(dbSession) { }

        public IEnumerable<Moves> GetAll()
        {
            using (var conn = NewConnection)
            {
                return conn.GetList<Moves>();
            }
        }

        public void Create(Moves move)
        {
            using (var conn = NewConnection)
            {
                conn.Insert(move);
            }
        }

    }
}