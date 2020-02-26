using System.ComponentModel;

namespace PokemonSimulation.Models.Enums
{
    public enum StatsEnum
    {
        [Description("hp")]
        HP = 1,
        [Description("attack")]
        Attack = 2,
        [Description("defense")]
        Defense = 3,
        [Description("special-attack")]
        SpAttack = 4,
        [Description("special-defense")]
        SpDefense = 5,
        [Description("speed")]
        Speed = 6
    }

}