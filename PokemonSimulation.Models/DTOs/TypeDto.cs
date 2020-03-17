using System.Collections.Generic;

namespace PokemonSimulation.Models.DTOs
{
    public class TypeDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public List<TypeAdvantageDto> TypeAdvantages { get; set; }
    }
}