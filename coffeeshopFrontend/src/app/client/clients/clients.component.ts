import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/client';
import { ClientRedeemed } from 'src/app/Models/client-redeemed';
import { ClientsService } from 'src/app/services/clients/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  redeemedClients: ClientRedeemed[] = [];

  constructor(
    private _clientService: ClientsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this._clientService.getClients().subscribe((data) => {
      console.table(data);
      this.checkPoints(data);
    });
  }

  checkPoints(clients: any) {
    let points = 0;
    clients.forEach((element: any) => {
      if (element.purchasedCoffees > 10) {
        points = Math.floor(element.purchasedCoffees / 10);
        element.points = points;
      } else {
        element.points = 0;
      }
    });
    this.calculateAmount(clients);
  }

  calculateAmount(clients: any) {
    let cashAmount = 0;
    clients.forEach((element: any) => {
      if (element.points > 3) {
        cashAmount = element.points * 0.5;
        element.cashAmount = cashAmount;
      } else {
        element.cashAmount = 0;
      }
    });
    this.redeemedClients = clients;
    console.log(this.redeemedClients);
  }

  addClient() {
    this._router.navigate(['/clients/add']);
  }

  editClient(id: number) {
    this._router.navigate(['/clients/edit/', id]);
  }

  viewClient(id: number) {
    this._router.navigate(['/clients/view/', id]);
  }

  deleteClient(id: number) {
    this._clientService.deleteClient(id).subscribe((data) => {
      this.getClients();
    });
  }

  goToHome() {
    this._router.navigate(['/']);
  }
}
