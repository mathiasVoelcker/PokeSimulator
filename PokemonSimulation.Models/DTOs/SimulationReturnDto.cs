namespace PokemonSimulation.Models.DTOs
{
    public class SimulationReturnDto
    {
        public int Damage { get; set; }
     
        public string Effect { get; set; }

        public decimal EffectDecimal { 
            set
            {
                if (value > 0m && value < 1)
                    Effect = "Is not very effective";
                else if (value >= 2m)
                    Effect = "Is super effective!";
                else if (value == 0m)
                    Effect = "The move had no effect";
                else
                    Effect = "";
            }
         }

    }
}