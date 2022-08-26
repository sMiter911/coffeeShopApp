using AutoMapper;
using CoffeeShop.API.Dtos.Client;
using CoffeeShop.API.Entities;
using CoffeeShop.API.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeShop.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly IClientRepo _clientRepo;
        private readonly IMapper _mapper;

        public ClientsController(IClientRepo clientRepo, IMapper mapper)
        {
            _clientRepo = clientRepo ?? throw new ArgumentNullException(nameof(clientRepo));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        public ActionResult<IEnumerable<ReadClientDto>> GetAllClients()
        {
            var client = _clientRepo.GetClients();
            return Ok(_mapper.Map<IEnumerable<ReadClientDto>>(client));
        }

        [HttpGet("{id}", Name = "GetClientById")]
        public ActionResult<ReadClientDto> GetClientById(int id)
        {
            var client = _clientRepo.GetClientById(id);
            if (client == null)
            {
                return NotFound();
            }
            return Ok(_mapper.Map<ReadClientDto>(client));
        }

        [HttpPost]
        public ActionResult<ReadClientDto> CreateClient(CreateClientDto clientCreateDto)
        {
            var clientModel = _mapper.Map<Client>(clientCreateDto);
            _clientRepo.CreateClient(clientModel);
            _clientRepo.SaveChanges();

            var clientRead = _mapper.Map<ReadClientDto>(clientModel);
            return CreatedAtRoute(nameof(GetClientById), new { Id = clientRead.ClientId }, clientRead);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateClient(int id, UpdateClientDto updateClientDto)
        {
            var clientModelFromRepo = _clientRepo.GetClientById(id);
            if (clientModelFromRepo == null)
            {
                return NotFound();
            }

            if (updateClientDto.PurchasedCoffees < 10)
            {
                updateClientDto.PurchasedCoffees = EvaluatePoints(updateClientDto);
            }
            _mapper.Map(updateClientDto, clientModelFromRepo);
            _clientRepo.UpdateClient(clientModelFromRepo);
            _clientRepo.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteClient(int id)
        {
            var clientModelFromRepo = _clientRepo.GetClientById(id);
            if (clientModelFromRepo == null)
            {
                return NoContent();
            }

            _clientRepo.DeleteClient(clientModelFromRepo);
            _clientRepo.SaveChanges();
            return NoContent();
        }

        [NonAction]
        public int EvaluatePoints(UpdateClientDto updateClientDto)
        {
            int points = updateClientDto.PurchasedCoffees / 10;
            return points;
        }
    }
}
