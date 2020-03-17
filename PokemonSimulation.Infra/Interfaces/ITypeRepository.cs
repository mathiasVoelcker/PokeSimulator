using System;
using System.Collections.Generic;

namespace PokemonSimulation.Infra.Interfaces
{
    public interface ITypeRepository
    {

        List<Models.Type> GetAll();

        Models.Type GetById(int id);

         void Create(Models.Type type);
    }
}