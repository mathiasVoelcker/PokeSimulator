using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Domain.Interfaces
{
    public interface ISimulationApplication
    {
        int GetMoveDamage(SimulationDto simulationDto);

        int GetMoveDamageInCache(SimulationDto simulationDto);
    }
}