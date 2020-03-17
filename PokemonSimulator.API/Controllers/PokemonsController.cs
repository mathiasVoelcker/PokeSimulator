using BaseSecurity.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulator.API.Controllers
{
    public class PokemonsController : BaseController
    {

        private readonly IPokemonApplication _pokemonApplication;

        public PokemonsController(
            ILoggerDomain loggerDomain, 
            IAuthRepository authRepository,
            IPokemonApplication pokemonApplication) : base(loggerDomain, authRepository)
        {
            _pokemonApplication = pokemonApplication;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return ExecFunc(() => {
                string token = Request.Headers["Authorization"];
                var idUser =  _authRepository.GetUserIdFromToken(token);
                return _pokemonApplication.GetAll(idUser);
            });
        }

        [HttpGet]
        public IActionResult GetById([FromRoute] int id)
        {
            return ExecFunc(() =>
            {
                string token = Request.Headers["Authorization"];
                var idUser =  _authRepository.GetUserIdFromToken(token);
                return _pokemonApplication.GetById(id, idUser);
            });
        }

        [HttpPost]
        public IActionResult Create([FromBody] PokemonDto pokemon)
        {
            return ExecFunc(() => {
                string token = Request.Headers["Authorization"];
                if (token == null) return _pokemonApplication.SaveInCookie(pokemon);
                pokemon.User = new User() { Id = _authRepository.GetUserIdFromToken(token) };
                return _pokemonApplication.Save(pokemon);
            });
        }

        [HttpPut]
        public IActionResult Update([FromBody] PokemonDto pokemon)
        {
            string token = Request.Headers["Authorization"];
            var idUser =  _authRepository.GetUserIdFromToken(token);
            return ExecFunc(() => _pokemonApplication.Update(pokemon, idUser));
        }

        [HttpDelete]
        public IActionResult Delete([FromRoute] int id)
        {
            return ExecFunc(() => {
                string token = Request.Headers["Authorization"];
                var idUser =  _authRepository.GetUserIdFromToken(token);
                return _pokemonApplication.Delete(id, idUser);
            });
        }
    }
}