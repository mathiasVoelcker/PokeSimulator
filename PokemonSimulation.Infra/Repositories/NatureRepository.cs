using System.Collections.Generic;
using Dapper;
using PokemonSimulation.Infra.Database;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Repositories


{
    public class NatureRepository : BaseRepository, INatureRepository
    {
        public NatureRepository(IDbSession dbSession) : base(dbSession) { }

        public IEnumerable<Natures> GetAll()
        {
            using (var conn = NewConnection)
            {
                return conn.GetList<Natures>();
            }
        }

        public void CreateNature(Natures nature)
        {
            using (var conn = NewConnection)
            {
                conn.Insert(nature);
            }
        }

    }
}