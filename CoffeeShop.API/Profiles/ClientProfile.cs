using AutoMapper;
using CoffeeShop.API.Dtos.Client;
using CoffeeShop.API.Entities;

namespace CoffeeShop.API.Profiles
{
    public class ClientProfile : Profile
    {
        public ClientProfile()
        {
            CreateMap<Client, ReadClientDto>();
            CreateMap<CreateClientDto, Client>();
            CreateMap<UpdateClientDto, Client>();
            CreateMap<Client, UpdateClientDto>();
        }
    }
}
