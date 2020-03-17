using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Models.Adapters
{
    public static class PokemonAdapter
    {
        public static PokemonDto ToDto(this Pokemons pokemon, bool isSimple = false)
        {
            return new PokemonDto()
            {
                Id = pokemon.Id,
                PokemonSpecies = isSimple ? pokemon.Pokemon_Species.ToDtoSimple() : pokemon.Pokemon_Species.ToDto(),
                Nature = isSimple ? null : pokemon.Nature.ToDto(),
                Move1 = isSimple ? null : pokemon.Move1?.ToDto(),
                Move2 = isSimple ? null : pokemon.Move2?.ToDto(),
                Move3 = isSimple ? null : pokemon.Move3?.ToDto(),
                Move4 = isSimple ? null : pokemon.Move4?.ToDto(),
                User = pokemon.Id_User != null ? new User() { Id = pokemon.Id_User.Value } : null,
                Nickname = pokemon.Nickname,
                Level = pokemon.Level,
                Hp = pokemon.Hp,
                Attack = pokemon.Attack,
                Defense = pokemon.Defense,
                SpAttack = pokemon.Sp_Attack,
                SpDefense = pokemon.Sp_Defense,
                Speed = pokemon.Speed,
                IvHp = pokemon.Iv_Hp,
                IvAttack = pokemon.Iv_Attack,
                IvDefense = pokemon.Iv_Defense,
                IvSpAttack = pokemon.Iv_Sp_Attack,
                IvSpDefense = pokemon.Iv_Sp_Defense,
                IvSpeed = pokemon.Iv_Speed,
                EvHp = pokemon.Ev_Hp,
                EvAttack = pokemon.Ev_Attack,
                EvDefense = pokemon.Ev_Defense,
                EvSpAttack = pokemon.Ev_Sp_Attack,
                EvSpDefense = pokemon.Ev_Sp_Defense,
                EvSpeed = pokemon.Ev_Speed
            };
        }

        public static Pokemons ToModel(this PokemonDto pokemonDto)
        {
            return new Pokemons()
            {
                Id = pokemonDto.Id,
                Id_Pokemon_Species = pokemonDto.PokemonSpecies.Id,
                Id_User = pokemonDto.User?.Id,
                Id_Nature = pokemonDto.Nature.Id,
                Id_Move_1 = pokemonDto.Move1?.Id,
                Id_Move_2 = pokemonDto.Move2?.Id,
                Id_Move_3 = pokemonDto.Move3?.Id,
                Id_Move_4 = pokemonDto.Move4?.Id,
                Nickname = pokemonDto.Nickname,
                Level = pokemonDto.Level,
                Hp = pokemonDto.Hp,
                Attack = pokemonDto.Attack,
                Defense = pokemonDto.Defense,
                Sp_Attack = pokemonDto.SpAttack,
                Sp_Defense = pokemonDto.SpDefense,
                Speed = pokemonDto.Speed,
                Iv_Hp = pokemonDto.IvHp,
                Iv_Attack = pokemonDto.IvAttack,
                Iv_Defense = pokemonDto.IvDefense,
                Iv_Sp_Attack = pokemonDto.IvSpAttack,
                Iv_Sp_Defense = pokemonDto.IvSpDefense,
                Iv_Speed = pokemonDto.IvSpeed,
                Ev_Hp = pokemonDto.EvHp,
                Ev_Attack = pokemonDto.EvAttack,
                Ev_Defense = pokemonDto.EvDefense,
                Ev_Sp_Attack = pokemonDto.EvSpAttack,
                Ev_Sp_Defense = pokemonDto.EvSpDefense,
                Ev_Speed = pokemonDto.EvSpeed
            };
        }
    }
}