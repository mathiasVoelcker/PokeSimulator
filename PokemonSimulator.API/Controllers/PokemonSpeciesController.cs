using Microsoft.AspNetCore.Mvc;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Infra.Interfaces;

namespace PokemonSimulator.API.Controllers
{
    [ApiController]
    public class PokemonSpeciesController : BaseController
    {   
        private readonly IPokemonSpeciesApplication _application;

        public PokemonSpeciesController(
            ILoggerDomain loggerDomain,
            IPokemonSpeciesApplication pokemonSpeciesApplication) : base(loggerDomain) 
        {
            _application = pokemonSpeciesApplication;
        }

        [HttpGet]
        public IActionResult GetByName([FromQuery]string name)
        {
            return ExecFunc(() => { return _application.GetByName(name); });
        }

        [HttpGet]
        public IActionResult GetById([FromQuery]int id)
        {
            return ExecFunc(() => { return _application.GetById(id); });
        }

        
    }
}