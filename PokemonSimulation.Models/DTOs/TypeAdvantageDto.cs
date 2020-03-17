namespace PokemonSimulation.Models.DTOs
{
    public class TypeAdvantageDto
    {

        public Models.Type AttackingType { get; set; }

        public Models.Type DefendingType { get; set; }

        public decimal Effect { get; set; }
    }
}