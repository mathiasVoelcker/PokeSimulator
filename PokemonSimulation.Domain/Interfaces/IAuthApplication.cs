using System.Threading.Tasks;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Domain.Interfaces
{
    public interface IAuthApplication
    {
        Task<string> Login(LoginDto loginDto);

        Task<bool> Register(LoginDto loginDto);
    }
}