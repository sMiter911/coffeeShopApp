# Coffe Application

Objective
Coffee Shop Application where the public can purchase coffee. And clients receive points for each purchase

The main CRUD objectives have be implemented. Database used was MSSQL.

## Requirements

1. MSSQL
2. VisualStudio 2019/22
3. .NET 6.0
4. Node and npm

## Backend

The API can be run by going into CoffeeShop.API and selecting the solution file after opening, you will have to change the connection string in the appsettings.json file:

    "ConnectionStrings": {
    "DevConnection": "Server=[YOU-SERVER-HERE]; Database=[DATABASE-NAME];Trusted_Connection=True; MultipleActiveResultSets=True;"
    }

You may then also have to do some migrations; This can be done via the Package Manage Console. If you cannot find it on your console, go to tools and highlight Nuget Package Manager, you will find it there as well. You will then have to run the following commands:

    Add-Migration InitialMigration
    Update-Database

At times you may just have to update the database only.

You may now run the application. It should open a window on https://localhost:7044/swagger/index.html from here you may test some of the CRUD operations and also add some data into the database.

## Front End

In order to start the front end, you will have to go into coffeeshopFrontend, from there you will have to run:

    npm i

This will install the required packages and it's dependencies. The application will run on http://localhost:4200/
you may follow the link. Make sure the back end is running in order for the application to connect to the backend.
