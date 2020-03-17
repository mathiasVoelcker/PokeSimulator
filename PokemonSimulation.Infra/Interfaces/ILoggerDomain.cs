using Microsoft.Extensions.Logging;
using Serilog.Core;

namespace PokemonSimulation.Infra.Interfaces
{
    public interface ILoggerDomain
    {
        Logger GetLog();
    }
}