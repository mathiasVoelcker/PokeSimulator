using PokemonSimulation.Models.Enums;

namespace PokemonSimulation.Models
{
    public class Natures
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public StatsEnum? Strong_Stat { get; set; }     

        public StatsEnum? Weak_Stat { get; set; }
    }
}