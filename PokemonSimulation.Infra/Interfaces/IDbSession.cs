
using System.Data.SqlClient;

namespace PokemonSimulation.Infra.Interfaces
{
    public interface IDbSession
    {
        SqlConnection CreateConnection();
    }
}