using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Models.Adapters
{
    public static class TypeAdapter
    {
        public static TypeDto ToDto(this Models.Type type)
        {
            return new TypeDto()
            {
                Name = type.Name.ToLower()
            };
        }
    }
}