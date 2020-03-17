using System;
using BaseSecurity.Interfaces;
using Extensions.MV;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models.Exceptions;
using PokemonSimulation.Models.Global;

namespace PokemonSimulator.API.Controllers
{
    [Route("api/[controller]/[action]/{id?}")]
    public class BaseController : ControllerBase
    {
        private readonly ILoggerDomain _loggerDomain;
        
        protected readonly IAuthRepository _authRepository;

        public BaseController(ILoggerDomain loggerDomain) {
            _loggerDomain = loggerDomain;
        }

        public BaseController(ILoggerDomain loggerDomain, IAuthRepository authRepository) {
            _loggerDomain = loggerDomain;
            _authRepository = authRepository;
        }

        public ActionResult ExecFunc(Func<object> function) {
            try 
            {
                return Ok(function());
            } 
            catch(DomainException domainException)
            {
                _loggerDomain.GetLog().Error(domainException.FullExceptionLog());
                return BadRequest(new {
                    authenticated = false,
                    message = domainException.Message
                });
            }
            catch (Exception exception)
            {
                _loggerDomain.GetLog().Error(exception.FullExceptionLog());
                return BadRequest(new {
                    authenticated = true,
                    message = GlobalStrings.MAIN_ERROR_MESSAGE
                });
            }
        }

    }
}