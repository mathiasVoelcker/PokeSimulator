using System.Collections.Generic;
using PokemonSimulation.Models;

namespace PokemonSimulation.Infra.Interfaces
{
    public interface IPokemonRepository : IBaseRepository
    {
        IEnumerable<Pokemons> GetByUser(int idUser);

        void Save(Pokemons pokemon);

        void Update(Pokemons pokemon);

        void Delete(Pokemons pokemon);
    }
}