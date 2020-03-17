namespace PokemonSimulation.Models.DTOs
{
    public class PokemonSpeciesDto
    {
        public int Id { get; set; }

        public int NationalNumb { get; set; }

        public string Name { get; set; }

        public int BaseHp { get; set; } 

        public int BaseAttack { get; set; }

        public int BaseDefense { get; set; }

        public int BaseSpAttack { get; set; }

        public int BaseSpDefense { get; set; }

        public int BaseSpeed { get; set; }

        public TypeDto FirstType { get; set; }

        public TypeDto SecondType { get; set; }
    }
}