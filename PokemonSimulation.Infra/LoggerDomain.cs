using System;
using System.IO;
using Microsoft.Extensions.Configuration;
using PokemonSimulation.Infra.Interfaces;
using Serilog;
using Serilog.Core;
using Serilog.Events;
using Serilog.Sinks.MSSqlServer;

namespace PokemonSimulation.Infra
{
    public class LoggerDomain : ILoggerDomain
    {
        private readonly IConfiguration _configuration;



        public LoggerDomain(IConfiguration configuration) {
            if (_configuration == null) {
                _configuration = configuration;
            }
        }
        
        //     .SetBasePath(Directory.GetCurrentDirectory())
        //     .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        //     .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production"}.json", optional: true)
        //     .Build();

        public Logger GetLog()
        {
            var connectionString = _configuration.GetConnectionString("MainConnection");
            return new LoggerConfiguration()
                    .ReadFrom.Configuration(_configuration)
                    .WriteTo
                    .MSSqlServer(connectionString, 
                        "LOGS", 
                        columnOptions: new ColumnOptions(),
                        autoCreateSqlTable: true,
                        restrictedToMinimumLevel: LogEventLevel.Error)
                    .CreateLogger();
        }
    }
}