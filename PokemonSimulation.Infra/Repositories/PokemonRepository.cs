using System.Collections.Generic;
using Dapper;
using PokemonSimulation.Infra.Database.Queries.Pokemons;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Repositories
{
    public class PokemonRepository : BaseRepository, IPokemonRepository
    {
        public PokemonRepository(IDbSession dbSession) : base(dbSession) { }

        public IEnumerable<Pokemons> GetByUser(int idUser)
        {
            using (var conn = NewConnection)
            {
                return conn.Query<Pokemons, Pokemon_Species, Pokemons>(
                    Scripts.GetByUser,
                    map: (pokemon, pokemonSpecies) => {
                        pokemon.Pokemon_Species = pokemonSpecies;
                        return pokemon;
                    },
                    splitOn: "ID",
                    param: new { idUser });
            }
        }

        public void Save(Pokemons pokemon)
        {
            using (var conn = NewConnection)
            {
                conn.Insert(pokemon);
            }
        }

        public void Update(Pokemons pokemon)
        {
            using (var conn = NewConnection)
            {
                conn.Update(pokemon);
            }
        }

        public void Delete(Pokemons pokemon)
        {
            using (var conn = NewConnection)
            {
                conn.Delete(pokemon);
            }
        }
    }
}