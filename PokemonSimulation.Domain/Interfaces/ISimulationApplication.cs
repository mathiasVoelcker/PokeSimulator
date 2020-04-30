using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Domain.Interfaces
{
    public interface ISimulationApplication
    {
        SimulationReturnDto GetMoveDamage(SimulationDto simulationDto);

        int GetMoveDamageInCache(SimulationDto simulationDto);
    }
}