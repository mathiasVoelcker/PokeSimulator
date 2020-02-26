using System;
using Dapper;
using PokemonSimulation.Infra.Database;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Repositories
{
    public class PokemonSpeciesRepository : BaseRepository, IPokemonSpeciesRepository
    {
        public PokemonSpeciesRepository(DbSession dbSession) : base(dbSession)
        {
        }

        public void Create(Pokemon_Species pokemonspecies)
        {
            using(var conn = NewConnection) 
            {
                conn.Insert(pokemonspecies);
            }
        }
    }
}