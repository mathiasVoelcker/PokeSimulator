namespace PokemonSimulation.Infra.Database.Queries.Types
{
    public class Scripts
    {

        public static readonly string GetAllType = @"SELECT * FROM TYPES";

        public static readonly string GetById = "SELECT * FROM TYPES WHERE ID = @Id";

        public static readonly string CreateType = @"INSERT INTO TYPES (Name) VALUES (@Name)";
    }
}