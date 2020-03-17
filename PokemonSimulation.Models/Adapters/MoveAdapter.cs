using Extensions.MV;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Models.Adapters
{
    public static class MoveAdapter
    {
        public static MoveDto ToDto(this Moves move)
        {
            return new MoveDto()
            {
                Id = move.Id,
                Name = move.Name.Capitalize(),
                BasePower = (int)move.Base_Power,
                Category = move.Move_Category.GetEnumDescription(),
                TypeDto = new TypeDto() { Id = move.Id_Type }
            };
        }
    }
}