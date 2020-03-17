using Microsoft.AspNetCore.Mvc;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Infra.Interfaces;

namespace PokemonSimulator.API.Controllers
{
    public class MovesController : BaseController
    {

        private readonly IMoveApplication _moveApplication;

        public MovesController(ILoggerDomain loggerDomain, IMoveApplication moveApplication) : base(loggerDomain)
        {
            _moveApplication = moveApplication;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return ExecFunc(() => _moveApplication.GetAll());
        }
    }
}