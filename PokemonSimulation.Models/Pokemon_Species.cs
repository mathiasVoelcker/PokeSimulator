namespace PokemonSimulation.Models
{
    public class Pokemon_Species
    {
        public int Id { get; set; }

        public int National_Numb { get; set; }

        public string Name { get; set; }

        public string Url_Image { get; set; }

        public int Base_Hp { get; set; }

        public int Base_Attack { get; set; }

        public int Base_Defense { get; set; }

        public int Base_Sp_Attack { get; set; }

        public int Base_Sp_Defense { get; set; }

        public int Base_Speed { get; set; }

        public int First_Type_Id { get; set; }

        public int? Second_Type_Id { get; set; }
    }
}