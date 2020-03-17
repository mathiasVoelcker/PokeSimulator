using Microsoft.AspNetCore.Mvc;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Infra.Interfaces;

namespace PokemonSimulator.API.Controllers
{
    public class NaturesController : BaseController
    {
        private readonly INatureApplication _natureApplication;

        public NaturesController(ILoggerDomain loggerDomain, INatureApplication natureApplication) : base(loggerDomain)
        {
            _natureApplication = natureApplication;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return ExecFunc(() => _natureApplication.GetAll());
        }
    }
}