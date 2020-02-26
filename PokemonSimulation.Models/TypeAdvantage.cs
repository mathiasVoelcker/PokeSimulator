namespace PokemonSimulation.Models
{
    public class TypeAdvantage
    {
        public TypeAdvantage(decimal effect, int idAttackingType, int idDefensiveType)
        {
            Effect = effect;
            IdAttackingType = idAttackingType;
            IdDefensiveType = idDefensiveType;
        }

        public int Id { get; set; }

        public decimal Effect { get; set; }

        public int IdAttackingType { get; set; }

        public int IdDefensiveType { get; set; }
    }
}