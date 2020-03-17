using System.Collections.Generic;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Domain.Interfaces
{
    public interface IPokemonSpeciesApplication
    {
        List<PokemonSpeciesDto> GetByName(string name);

        PokemonSpeciesDto GetById(int id);
    }
}