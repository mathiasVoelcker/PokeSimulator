using System;
using System.Collections.Generic;
using System.Linq;
using Dapper;
using PokemonSimulation.Infra.Database;
using PokemonSimulation.Infra.Database.Queries.Types;
using PokemonSimulation.Infra.Interfaces;

namespace PokemonSimulation.Infra.Repositories
{
    public class TypeRepository : BaseRepository, ITypeRepository
    {
        public TypeRepository(IDbSession dbSession) : base(dbSession) { }

        public List<Models.Type> GetAll()
        {
            using (var conn = NewConnection) 
            {
                return conn.Query<Models.Type>(Scripts.GetAllType).ToList();
            }
        }

        public Models.Type GetById(int id)
        {
            using (var conn = NewConnection)
            {
                return conn.QueryFirst<Models.Type>(Scripts.GetById, new { id });
            }
        }

        public void Create(Models.Type type)
        {
            using (var conn = NewConnection) 
            {
                conn.Execute(Scripts.CreateType, type);
            }
        }

    }
}