namespace PokemonSimulation.Infra.Database.Queries.Types
{
    public class Scripts
    {

        public static string GetAllTypeSql = @"SELECT * FROM TYPES";

        public static string CreateTypeSql = @"INSERT INTO TYPES (Name) VALUES (@Name)";
    }
}