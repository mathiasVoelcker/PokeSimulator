using PokemonSimulation.Models.Enums;

namespace PokemonSimulation.Models
{
    public class Moves
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public decimal Base_Power { get; set; }

        public MoveCategoryEnum Move_Category { get; set; }

        public int Id_Type { get; set; }
    }
}