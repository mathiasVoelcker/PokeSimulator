namespace PokemonSimulation.Infra.Database.Queries.Pokemons
{
    public class Scripts
    {
        public static readonly string GetByUser = @"
            SELECT 
                pokemon.* ,
                species.ID AS ID,
                species.Name
            FROM POKEMONS pokemon
                INNER JOIN POKEMON_SPECIES species
                    ON pokemon.ID_POKEMON_SPECIES = species.ID
            WHERE ID_USER = @idUser";

        public static readonly string GetById = @"
            SELECT *
            FROM POKEMONS
            WHERE ID = @id";
    }
}