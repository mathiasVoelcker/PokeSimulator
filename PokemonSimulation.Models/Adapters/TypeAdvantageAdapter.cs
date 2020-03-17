using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Models.Adapters
{
    public static class TypeAdvantageAdapter
    {
        public static TypeAdvantageDto ToDto(this TypeAdvantage typeAdvantage) 
        {
            return new TypeAdvantageDto() 
            {
                AttackingType = typeAdvantage.AttackingType,
                DefendingType = typeAdvantage.DefendingType,
                Effect = typeAdvantage.Effect
            };
        }
    }
}