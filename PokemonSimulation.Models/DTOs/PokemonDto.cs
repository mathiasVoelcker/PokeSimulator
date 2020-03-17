using PokemonSimulation.Models.Exceptions;

namespace PokemonSimulation.Models.DTOs
{
    public class PokemonDto
    {
        public int Id { get; set; }

        public PokemonSpeciesDto PokemonSpecies { get; set; }

        public User User { get; set; }

        public NatureDto Nature { get; set; }

        public MoveDto Move1 { get; set; }

        public MoveDto Move2 { get; set; }

        public MoveDto Move3 { get; set; }

        public MoveDto Move4 { get; set; }

        public string Nickname { get; set; }

        public int Level { get; set; }

        public int Hp { get; set; }

        public int Attack { get; set; }

        public int Defense { get; set; }

        public int SpAttack { get; set; }

        public int SpDefense { get; set; }

        public int Speed { get; set; } 
        
        public int EvHp { get; set; }
 
        public int EvAttack { get; set; }
    
        public int EvDefense { get; set; }
    
        public int EvSpAttack { get; set; }
    
        public int EvSpDefense { get; set; }
    
        public int EvSpeed { get; set; }

        public int IvHp { get; set; }
 
        public int IvAttack { get; set; }
    
        public int IvDefense { get; set; }
    
        public int IvSpAttack { get; set; }
    
        public int IvSpDefense { get; set; }
    
        public int IvSpeed { get; set; }

        public void Validate()
        {
            if (PokemonSpecies == null || PokemonSpecies.Id == 0)
                throw new DomainException("A pokemon species must be defined");

            if (Nature == null || Nature.Id == 0) 
                throw new DomainException(string.Format("A nature must be informed for {0}", Nickname ?? PokemonSpecies.Name));
        }
    }
}