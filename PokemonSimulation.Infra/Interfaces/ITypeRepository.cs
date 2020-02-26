using System;
using System.Collections.Generic;

namespace PokemonSimulation.Infra.Interfaces
{
    public interface ITypeRepository
    {

        List<Models.Type> GetAll();

         void Create(Models.Type type);
    }
}