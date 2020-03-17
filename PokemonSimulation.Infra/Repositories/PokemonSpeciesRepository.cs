using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using PokemonSimulation.Infra.Database;
using PokemonSimulation.Infra.Database.Queries.PokemonSpecies;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;
using PokemonSimulation.Models.Adapters;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Infra.Repositories
{
    public class PokemonSpeciesRepository : BaseRepository, IPokemonSpeciesRepository
    {
        public PokemonSpeciesRepository(IDbSession dbSession) : base(dbSession) { }

        public IEnumerable<Pokemon_Species> GetByName(string name) 
        {
            using(var conn = NewConnection) 
            {
                name = string.Concat("%", name, "%");
                return conn.Query<Pokemon_Species, Type, Type, Pokemon_Species>(
                    Scripts.GetByName,
                    map: (pokemonSpecies, firstType, secondType) => {
                        pokemonSpecies.FirstType = firstType;
                        if (secondType != null) pokemonSpecies.SecondType = secondType;
                        return pokemonSpecies;
                    },
                    splitOn: "ID, ID",
                    param: new { name } );
            }
        }

        public void Create(Pokemon_Species pokemonspecies)
        {
            using(var conn = NewConnection) 
            {
                conn.Insert(pokemonspecies);
            }
        }

        public Pokemon_Species GetById(int id)
        {
            using (var conn = NewConnection)
            {
                return conn.Query<Pokemon_Species, Type, Type, Pokemon_Species>(
                    Scripts.GetById,
                    map: (pokemonSpecies, firstType, secondType) => {
                        pokemonSpecies.FirstType = firstType;
                        if (secondType != null) pokemonSpecies.SecondType = secondType;
                        return pokemonSpecies;
                    },
                    splitOn: "ID, ID",
                    param: new { id } ).FirstOrDefault();
            }
        }
    }
}