using PokemonSimulation.Models.Enums;

namespace PokemonSimulation.Models.DTOs
{
    public class MoveDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int BasePower { get; set; }

        public string Category { get; set; }

        public TypeDto TypeDto { get; set; }

    }
}