using Extensions.MV;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Models.Adapters
{
    public static class NatureAdapter
    {
        public static NatureDto ToDto(this Natures nature)
        {
            return new NatureDto()
            {
                Id = nature.Id,
                Name = nature.Name.Capitalize(),
                StrongStat = nature.Strong_Stat,
                WeakStat = nature.Weak_Stat
            };
        }
    }
}