namespace PokemonSimulation.Infra.Database.Queries.PokemonSpecies
{
    public class Scripts
    {
        public static readonly string GetByName = @"
                SELECT 
                    pokemonSpecies.ID,
                    pokemonSpecies.NAME,
                    pokemonSpecies.NATIONAL_NUMB,
                    pokemonSpecies.BASE_HP,
                    pokemonSpecies.BASE_ATTACK,
                    pokemonSpecies.BASE_DEFENSE,
                    pokemonSpecies.BASE_SP_ATTACK,
                    pokemonSpecies.BASE_SP_DEFENSE,
                    pokemonSpecies.BASE_SPEED,
                    firstType.ID AS ID,
                    firstType.Name,
                    secondType.ID AS ID,
                    secondType.Name
                FROM POKEMON_SPECIES pokemonSpecies
                    INNER JOIN TYPES firstType
                        ON pokemonSpecies.FIRST_TYPE_ID = firstType.ID
                    LEFT JOIN TYPES secondType
                        ON pokemonSpecies.SECOND_TYPE_ID = secondType.ID
                WHERE pokemonSpecies.NAME LIKE @name";

        public static readonly string GetById = @"
                SELECT 
                    pokemonSpecies.ID,
                    pokemonSpecies.NAME,
                    pokemonSpecies.NATIONAL_NUMB,
                    pokemonSpecies.BASE_HP,
                    pokemonSpecies.BASE_ATTACK,
                    pokemonSpecies.BASE_DEFENSE,
                    pokemonSpecies.BASE_SP_ATTACK,
                    pokemonSpecies.BASE_SP_DEFENSE,
                    pokemonSpecies.BASE_SPEED,
                    firstType.ID AS ID,
                    firstType.Name,
                    secondType.ID AS ID,
                    secondType.Name
                FROM POKEMON_SPECIES pokemonSpecies
                    INNER JOIN TYPES firstType
                        ON pokemonSpecies.FIRST_TYPE_ID = firstType.ID
                    LEFT JOIN TYPES secondType
                        ON pokemonSpecies.SECOND_TYPE_ID = secondType.ID
                WHERE pokemonSpecies.ID = @ID";
    }
}