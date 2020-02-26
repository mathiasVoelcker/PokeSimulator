using System.ComponentModel;

namespace PokemonSimulation.Models.Enums
{
    public enum MoveCategoryEnum
    {
        [Description("physical")]
        Physical = 1,
        [Description("special")]
        Special = 2,
        [Description("status")]
        Status = 3
    }
}