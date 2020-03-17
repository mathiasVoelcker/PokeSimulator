using System.Collections.Generic;
using PokemonSimulation.Domain.Interfaces;
using PokemonSimulation.Infra.Interfaces;
using PokemonSimulation.Models.Adapters;
using PokemonSimulation.Models.DTOs;

namespace PokemonSimulation.Domain.Applications
{
    public class NatureApplication : INatureApplication
    {
        private readonly INatureRepository _natureRepository;

        public NatureApplication(INatureRepository natureRepository)
        {
            _natureRepository = natureRepository;
        }

        public List<NatureDto> GetAll()
        {
            var listNaturesDto = new List<NatureDto>();
            var listNautres = _natureRepository.GetAll();
            foreach(var nature in listNautres)
            {
                listNaturesDto.Add(nature.ToDto());
            }
            return listNaturesDto;
        }
    }
}