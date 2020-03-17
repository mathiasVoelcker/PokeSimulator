namespace PokemonSimulation.Models
{
    public class Pokemons
    {
        public int Id { get; set; }

        public int Id_Pokemon_Species { get; set; }

        public int? Id_User { get; set; }

        public int Id_Nature { get; set; }

        public int? Id_Move_1 { get; set; }

        public int? Id_Move_2 { get; set; }

        public int? Id_Move_3 { get; set; }

        public int? Id_Move_4 { get; set; }

        public string Nickname { get; set; }

        public int Level { get; set; }

        public int Hp { get; set; }

        public int Attack { get; set; }

        public int Defense { get; set; }

        public int Sp_Attack { get; set; }

        public int Sp_Defense { get; set; }

        public int Speed { get; set; } 
        
        public int Ev_Hp { get; set; }
 
        public int Ev_Attack { get; set; }
    
        public int Ev_Defense { get; set; }
    
        public int Ev_Sp_Attack { get; set; }
    
        public int Ev_Sp_Defense { get; set; }
    
        public int Ev_Speed { get; set; }

        public int Iv_Hp { get; set; }
 
        public int Iv_Attack { get; set; }
    
        public int Iv_Defense { get; set; }
    
        public int Iv_Sp_Attack { get; set; }
    
        public int Iv_Sp_Defense { get; set; }
    
        public int Iv_Speed { get; set; }

        public Pokemon_Species Pokemon_Species { get; set; }

        public Natures Nature { get; set; }

        public Moves Move1 { get; set; }
        
        public Moves Move2 { get; set; }

        public Moves Move3 { get; set; }

        public Moves Move4 { get; set; }
    }
}