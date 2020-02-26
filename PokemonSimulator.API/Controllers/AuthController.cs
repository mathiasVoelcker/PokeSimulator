using System;
using System.Threading.Tasks;
using BaseSecurity.Interfaces;
using Microsoft.AspNetCore.Mvc;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulator.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {

        // private IAuthRepository _authRepository;

        private IAuthApplication _authApplication;

        public AuthController(IAuthApplication authApplication) {
            _authApplication = authApplication;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]LoginDto login) {
            var token = await _authApplication.Login(login);
            return Ok(new {
                authenticated = true,
                accessToken = token,
                message = "OK"
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]LoginDto loginDto) {
            try {
                await _authApplication.Register(loginDto);
                return Ok("User Successfully Registered");
            } catch(Exception ex) {
                return BadRequest(new { ex.Message });
            }
        }
    }
}