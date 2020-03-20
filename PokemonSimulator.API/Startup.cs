using System;
using BaseSecurity.Interfaces;
using BaseSecurity.Repositories;
using BaseSecurity.Security;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using PokemonSimulation.Domain.Applications;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Infra.Interfaces;
using IDbSession = PokemonSimulation.Infra.Interfaces.IDbSession;
using DbSessionBaseSecurity = BaseSecurity.Db.DbSession;
using DbSession = PokemonSimulation.Infra.Database.DbSession;
using PokemonSimulation.Infra;
using PokemonSimulation.Infra.Repositories;

namespace PokemonSimulator.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot";
            });

            services.AddSingleton<CacheDomain>();

            var signingConfiguration = new SigningConfiguration();
            services.AddSingleton(signingConfiguration);

            var tokenConfiguration = new TokenConfiguration();
            new ConfigureFromConfigurationOptions<TokenConfiguration>(
                Configuration.GetSection("TokenConfiguration"))
                    .Configure(tokenConfiguration);
            services.AddSingleton(tokenConfiguration);

            services.AddAuthentication(authOptions => {
                authOptions.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                authOptions.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(bearerOptions => {
                var paramsValidation = bearerOptions.TokenValidationParameters;
                paramsValidation.IssuerSigningKey = signingConfiguration.Key;
                paramsValidation.ValidAudience = tokenConfiguration.Audience;
                paramsValidation.ValidIssuer = tokenConfiguration.Issuer;
                paramsValidation.ValidateIssuerSigningKey = true;
                paramsValidation.ValidateLifetime = true;
                paramsValidation.ClockSkew = TimeSpan.Zero;
            });

            // Set Authorization attribute to be used in controller methods
            services.AddAuthorization(auth => {
               auth.AddPolicy("Bearer", 
                    new AuthorizationPolicyBuilder()
                        .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
                        .RequireAuthenticatedUser().Build());
            });
            
            var connectionString = Configuration.GetConnectionString("MainConnection");
            var dbSessionBaseSecurity = new DbSessionBaseSecurity(connectionString);
            var dbSession = new DbSession(connectionString);
            services.AddScoped<IDbSession>(sb => dbSession);
            

            #region Repositories
            services.AddScoped<IAuthRepository>(factory => new AuthRepository(dbSessionBaseSecurity, signingConfiguration, tokenConfiguration));
            services.AddScoped<ILoggerDomain>(factory => new LoggerDomain(Configuration));
            
            services.AddScoped<IPokemonSpeciesRepository, PokemonSpeciesRepository>();
            services.AddScoped<ITypeRepository, TypeRepository>();
            services.AddScoped<ITypeAdvantageRepository, TypeAdvantageRepository>();
            services.AddScoped<INatureRepository, NatureRepository>();
            services.AddScoped<IMoveRepository, MoveRepository>();
            services.AddScoped<IPokemonRepository, PokemonRepository>();
            #endregion
            
            #region Applications
            services.AddScoped<IAuthApplication, AuthApplication>();
            services.AddScoped<IPokemonSpeciesApplication, PokemonSpeciesApplication>();
            services.AddScoped<INatureApplication, NatureApplication>();
            services.AddScoped<IMoveApplication, MoveApplication>();
            services.AddScoped<IPokemonApplication, PokemonApplication>();
            services.AddScoped<ISimulationApplication, SimulationApplication>();
            #endregion

            services.AddMvc(options => {
                options.EnableEndpointRouting = false;
            }).SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
            services.AddCors(options =>
            {
                options.AddPolicy("local",
                builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // app.UseHttpsRedirection();

            app.UseRouting();
            
            app.UseCors("local");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "/api/{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "wwwroot/";

            });

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });
        }
    }
}
