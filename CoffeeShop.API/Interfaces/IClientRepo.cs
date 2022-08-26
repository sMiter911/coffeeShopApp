using CoffeeShop.API.Entities;

namespace CoffeeShop.API.Interfaces
{
    public interface IClientRepo
    {
        IEnumerable<Client> GetClients();

        Client GetClientById(int id);

        void CreateClient(Client client);  

        void UpdateClient(Client client);

        void DeleteClient(Client client);

        bool SaveChanges();

    }
}
