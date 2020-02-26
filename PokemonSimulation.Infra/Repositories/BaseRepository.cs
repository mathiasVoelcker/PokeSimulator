using System.Data.SqlClient;
using PokemonSimulation.Infra.Database;

namespace PokemonSimulation.Infra.Repositories
{
    public abstract class BaseRepository
    {

        protected DbSession dbSession;

        public BaseRepository(DbSession dbSession) {
            this.dbSession = dbSession;
        }
        
        public SqlConnection NewConnection 
        {
            get {
                return dbSession.CreateConnection();
            }
        }
    }
}