using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Models.Adapters
{
    public static class PokemonSpeciesAdapter
    {
        public static PokemonSpeciesDto ToDtoSimple(this Pokemon_Species pokemonSpecies)
        {
            
            return new PokemonSpeciesDto()
            {
                Id = pokemonSpecies.Id,
                NationalNumb = pokemonSpecies.National_Numb,
                Name = pokemonSpecies.Name,
                BaseHp = pokemonSpecies.Base_Hp,
                BaseAttack = pokemonSpecies.Base_Attack,
                BaseDefense = pokemonSpecies.Base_Defense,
                BaseSpAttack = pokemonSpecies.Base_Sp_Attack,
                BaseSpDefense = pokemonSpecies.Base_Sp_Defense,
                BaseSpeed = pokemonSpecies.Base_Speed
            };
        }

        public static PokemonSpeciesDto ToDto(this Pokemon_Species pokemonSpecies)
        {
            
            return new PokemonSpeciesDto()
            {
                Id = pokemonSpecies.Id,
                NationalNumb = pokemonSpecies.National_Numb,
                Name = pokemonSpecies.Name,
                BaseHp = pokemonSpecies.Base_Hp,
                BaseAttack = pokemonSpecies.Base_Attack,
                BaseDefense = pokemonSpecies.Base_Defense,
                BaseSpAttack = pokemonSpecies.Base_Sp_Attack,
                BaseSpDefense = pokemonSpecies.Base_Sp_Defense,
                BaseSpeed = pokemonSpecies.Base_Speed,
                FirstType = pokemonSpecies.FirstType.ToDto(),
                SecondType = pokemonSpecies.SecondType != null ? pokemonSpecies.SecondType.ToDto() : null
            };
        }
    }
}