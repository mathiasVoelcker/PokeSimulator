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
        public TypeRepository(DbSession dbSession) : base(dbSession) { }

        public void Create(Models.Type type)
        {
            using (var conn = NewConnection) 
            {
                conn.Execute(Scripts.CreateTypeSql, type);
            }
        }

        public List<Models.Type> GetAll()
        {
            using (var conn = NewConnection) 
            {
                return conn.Query<Models.Type>(Scripts.GetAllTypeSql).ToList();
            }
        }
    }
}