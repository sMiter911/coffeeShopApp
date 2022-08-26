using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CoffeeShop.API.Migrations
{
    public partial class AttributeRemoval : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Points",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "PointsRedemption",
                table: "Clients");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Points",
                table: "Clients",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<double>(
                name: "PointsRedemption",
                table: "Clients",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
