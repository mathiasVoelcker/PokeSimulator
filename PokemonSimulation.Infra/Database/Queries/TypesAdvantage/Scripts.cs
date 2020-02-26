namespace PokemonSimulation.Infra.Database.Queries.TypesAdvantage
{
    public class Scripts
    {
        public static string CreateTypeAdvantageSql = @"
            INSERT INTO TYPE_ADVANTAGES
            (ID_ATTACKING_TYPE, ID_DEFENSIVE_TYPE, EFFECT)
            VALUES (@idAttackingType, @idDefensiveType, @effect)";
    }
}