using System.Data.SqlClient;
using PokemonSimulation.Infra.Interfaces;

namespace PokemonSimulation.Infra.Database
{
    public class DbSession : IDbSession
    {

        private string _connectionString;

        public DbSession(string connectionString) {
            _connectionString = connectionString;
        }

        public SqlConnection CreateConnection()
        {
            return new SqlConnection(_connectionString);
        }
    }
}