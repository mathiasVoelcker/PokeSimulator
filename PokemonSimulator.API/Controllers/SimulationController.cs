using BaseSecurity.Interfaces;
using Microsoft.AspNetCore.Mvc;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulator.API.Controllers
{
    public class SimulationController : BaseController
    {

        private readonly ISimulationApplication _simulationApplication;

        public SimulationController(
            ILoggerDomain loggerDomain,
            IAuthRepository authRepository,
            ISimulationApplication simulationApplication) : base(loggerDomain, authRepository)
        {
            _simulationApplication = simulationApplication;
        }

        [HttpGet]
        public IActionResult GetDamage(SimulationDto simulationDto)
        {
            return ExecFunc(() => {
                return _simulationApplication.GetMoveDamage(simulationDto);
            });
        }
    }
}