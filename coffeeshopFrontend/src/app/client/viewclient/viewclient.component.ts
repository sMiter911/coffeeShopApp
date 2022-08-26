import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/Models/client';
import { ClientRedeemed } from 'src/app/Models/client-redeemed';
import { ClientsService } from 'src/app/services/clients/clients.service';

@Component({
  selector: 'app-viewclient',
  templateUrl: './viewclient.component.html',
  styleUrls: ['./viewclient.component.scss'],
})
export class ViewclientComponent implements OnInit {
  clientId!: number;
  routeSub!: Subscription;
  client!: ClientRedeemed;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _clientService: ClientsService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.clientId = params['id'];
      this.getClient(this.clientId);
    });
  }

  getClient(id: number) {
    this._clientService.getClient(id).subscribe((client) => {
      this.getClientPoints(client);
    }),
      (error: any) => {
        console.log(error);
      };
  }

  getClientPoints(client: any) {
    let points = 0;
    if (client.purchasedCoffees > 10) {
      points = Math.floor(client.purchasedCoffees / 10);
      client.points = points;
    } else {
      client.points = 0;
    }
    this.cashCalculation(client);
  }

  cashCalculation(client: any) {
    let cashAmount = 0;
    if (client.points > 3) {
      cashAmount = client.points * 0.5;
      client.cashAmount = cashAmount;
    } else {
      client.cashAmount = 0;
    }
    this.client = client;
  }

  goBack() {
    this._router.navigate(['/clients']);
  }
}
