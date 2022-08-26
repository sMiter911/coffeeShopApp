using CoffeeShop.API.Data;
using CoffeeShop.API.Entities;
using System.Data.Common;

namespace CoffeeShop.API.Interfaces.Implementations
{
    public class ClientRepo : IClientRepo
    {
        private readonly ApplicationDbContext _context;

        public ClientRepo(ApplicationDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public void CreateClient(Client client)
        {
            if (client == null) throw new ArgumentNullException(nameof(client));
            _context.Clients.Add(client);
        }

        public void DeleteClient(Client client)
        {
            if(client == null) throw new ArgumentNullException(nameof(client));
            _context.Clients.Remove(client);
        }

        public Client GetClientById(int id)
        {
            return _context.Clients.FirstOrDefault(x => x.ClientId == id);
        }

        public IEnumerable<Client> GetClients()
        {
            return _context.Clients.ToList();
        }

        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

        public void UpdateClient(Client client)
        {
            
        }
    }
}
