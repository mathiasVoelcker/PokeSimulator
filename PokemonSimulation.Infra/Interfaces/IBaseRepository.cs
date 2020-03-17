namespace PokemonSimulation.Infra.Interfaces
{
    public interface IBaseRepository
    {
        T GetById<T>(int id);
    }
}