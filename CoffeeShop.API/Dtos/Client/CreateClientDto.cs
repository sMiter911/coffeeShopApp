using System.ComponentModel.DataAnnotations;

namespace CoffeeShop.API.Dtos.Client
{
    public class CreateClientDto
    {
        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string LastName { get; set; } = string.Empty;

        [Required]
        public int PurchasedCoffees { get; set; }

    }
}
