using PokemonSimulation.Models.Enums;

namespace PokemonSimulation.Models.DTOs
{
    public class NatureDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public StatsEnum? StrongStat { get; set; }

        public StatsEnum? WeakStat { get; set; }
    }
}