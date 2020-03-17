using System.Collections.Generic;
using Dapper;
using PokemonSimulation.Infra.Database;
using PokemonSimulation.Infra.Database.Queries.TypesAdvantage;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Repositories
{
    public class TypeAdvantageRepository : BaseRepository, ITypeAdvantageRepository
    {
        public TypeAdvantageRepository(IDbSession dbSession) : base(dbSession) { }

        public IEnumerable<TypeAdvantage> GetByIdAttackingType(int idAttackingType)
        {
            using (var conn = NewConnection)
            {
                return conn.Query<TypeAdvantage, Models.Type, Models.Type, TypeAdvantage>(
                    Scripts.GetByIdAttackingType, 
                    (typeAdvantage, attackingType, defendingType) => 
                    {
                        typeAdvantage.AttackingType = attackingType;
                        typeAdvantage.DefendingType = defendingType;
                        return typeAdvantage;  
                    },
                    splitOn: "ID, ID",
                    param: new { id = idAttackingType });
            }
        }

        public void Create(TypeAdvantage typeAdvantage)
        {
            using (var conn = NewConnection)
            {
                conn.Execute(Scripts.CreateTypeAdvantageSql, typeAdvantage);
            }
        }

    }
}