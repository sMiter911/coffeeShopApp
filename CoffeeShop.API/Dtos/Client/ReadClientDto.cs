using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoffeeShop.API.Dtos.Client
{
    public class ReadClientDto
    {
        public int ClientId { get; set; }

        public string FirstName { get; set; } = string.Empty;

        public string LastName { get; set; } = string.Empty;

        public int PurchasedCoffees { get; set; }

    }
}
