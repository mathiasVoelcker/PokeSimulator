namespace PokemonSimulation.Infra.Database.Queries.TypesAdvantage
{
    public class Scripts
    {

        public static readonly string GetByIdAttackingType = @"
            SELECT 
                typeAdvantage.ID,
                typeAdvantage.EFFECT,
                attackingType.ID AS ID,
                attackingType.NAME,
                defendingType.ID AS ID,
                defendingType.NAME
            FROM TYPE_ADVANTAGES typeAdvantage
                INNER JOIN TYPES attackingType
                    ON typeAdvantage.ID_ATTACKING_TYPE = attackingType.ID
                INNER JOIN TYPES defendingType
                    ON typeAdvantage.ID_DEFENSIVE_TYPE = defendingType.ID
            WHERE typeAdvantage.ID_ATTACKING_TYPE = @id";

        public static readonly string CreateTypeAdvantageSql = @"
            INSERT INTO TYPE_ADVANTAGES
            (ID_ATTACKING_TYPE, ID_DEFENSIVE_TYPE, EFFECT)
            VALUES (@idAttackingType, @idDefensiveType, @effect)";
    }
}