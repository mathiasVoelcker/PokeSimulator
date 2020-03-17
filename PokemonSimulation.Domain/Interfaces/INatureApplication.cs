using System.Collections.Generic;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Domain.Interfaces
{
    public interface INatureApplication
    {
        List<NatureDto> GetAll();
    }
}