using System.ComponentModel.DataAnnotations;

namespace CoffeeShop.API.Dtos.Client
{
    public class UpdateClientDto
    {

        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string LastName { get; set; } = string.Empty;

        public int PurchasedCoffees { get; set; }
    }
}
