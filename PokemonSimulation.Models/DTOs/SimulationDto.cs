namespace PokemonSimulation.Models.DTOs
{
    public class SimulationDto
    {
        public int AttackingPokemonId { get; set; }

        public int DefendingPokemonId { get; set; }

        public int MoveId { get; set; }

        public decimal Modifier { get; set; } = 1;
    }
}