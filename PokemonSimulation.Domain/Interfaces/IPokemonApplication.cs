using System.Collections.Generic;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Domain.Interfaces
{
    public interface IPokemonApplication
    {
        List<PokemonDto> GetAll(int idUser);

        List<PokemonDto> GetAllInCache();

        PokemonDto GetById(int id, int idUser);

        bool Save(PokemonDto pokemon);

        bool SaveInCache(PokemonDto pokemon);

        bool Update(PokemonDto pokemon, int idUserLogged);
        
        bool Delete(int pokemonId, int idUserLogged);
    }
}