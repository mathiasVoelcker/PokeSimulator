using System.Data.SqlClient;
using Dapper;
using PokemonSimulation.Infra.Database;
using PokemonSimulation.Infra.Interfaces;

namespace PokemonSimulation.Infra.Repositories
{
    public abstract class BaseRepository : IBaseRepository
    {

        protected IDbSession dbSession;

        public BaseRepository(IDbSession dbSession) {
            this.dbSession = dbSession;
        }
        
        public T GetById<T>(int id)
        {
            using (var conn = NewConnection)
            {
                return conn.Get<T>(id);
            }
        }

        public SqlConnection NewConnection 
        {
            get {
                return dbSession.CreateConnection();
            }
        }
    }
}