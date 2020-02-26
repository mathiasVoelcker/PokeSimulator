using System;
using System.Threading.Tasks;
using BaseSecurity.Interfaces;
using BaseSecurity.Models;
using BaseSecurity.Security;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Domain.Applications
{
    public class AuthApplication : IAuthApplication
    {

        private IAuthRepository _authRepository;

        public AuthApplication(IAuthRepository authRepository) 
        {
            _authRepository = authRepository;    
        }

        public async Task<string> Login(LoginDto loginDto)
        {
            var user = await _authRepository.GetUser(loginDto.Username);
            if (user == null)
                throw new Exception("User not found or password does not match");
            
            if (!LoginDomain.VerifyPassword(loginDto.Password, user.Password, user.Salt))
                throw new Exception("User not found or password does not match");

            var token = _authRepository.CreateToken(user);

            return token;
        }

        public async Task<bool> Register(LoginDto loginDto)
        {
            try {
                byte[] passwordHash, salt;
                var userFound = await _authRepository.GetUser(loginDto.Username);
                if (userFound != null)
                    throw new Exception("This username is already registered");
                LoginDomain.CreatePasswordHash(loginDto.Password, out passwordHash, out salt);
                var user = new User() {
                    Username = loginDto.Username,
                    Password = passwordHash,
                    Salt = salt
                };
                await _authRepository.Register(user);
                return true;
            } catch (Exception ex) {
                throw ex;
            }
        }
    }
}