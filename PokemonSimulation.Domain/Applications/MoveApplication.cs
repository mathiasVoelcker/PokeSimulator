using System.Collections.Generic;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models.Adapters;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Domain.Applications
{
    public class MoveApplication : IMoveApplication
    {
        private readonly IMoveRepository _moveRepository;
        
        public MoveApplication(IMoveRepository moveRepository)
        {
            _moveRepository = moveRepository;
        }

        public List<MoveDto> GetAll()
        {
            var listMovesDto = new List<MoveDto>();

            var listMoves = _moveRepository.GetAll();

            foreach (var move in listMoves)
            {
                listMovesDto.Add(move.ToDto());
            }

            return listMovesDto;       
        }
    }
}