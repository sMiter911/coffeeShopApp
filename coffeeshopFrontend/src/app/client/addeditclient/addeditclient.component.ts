import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/Models/client';
import { ClientsService } from 'src/app/services/clients/clients.service';

@Component({
  selector: 'app-addeditclient',
  templateUrl: './addeditclient.component.html',
  styleUrls: ['./addeditclient.component.scss'],
})
export class AddeditclientComponent implements OnInit {
  isEdit: boolean = false;
  clientId!: number;
  routeSub!: Subscription;
  client: Client = {
    clientId: 0,
    firstName: '',
    lastName: '',
    purchasedCoffees: 0,
  };

  @ViewChild(NgForm) clientForm!: NgForm;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _clientService: ClientsService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.clientId = params['id'];
      if (this.clientId) {
        this.isEdit = true;
        this.getClient(this.clientId);
      }
    });
  }

  getClient(id: number) {
    this._clientService.getClient(id).subscribe((client) => {
      this.client = client;
    }),
      (error: any) => {
        console.log(error);
      };
  }

  onSubmit(clientForm: any) {
    if (this.clientForm.valid) {
      if (this.isEdit) {
        this._clientService.updateClient(this.client).subscribe(() => {
          this._router.navigate(['/clients']);
        }),
          (error: any) => {
            console.log(error);
          };
      } else {
        this._clientService.addClient(this.client).subscribe(() => {
          this._router.navigate(['/clients']);
        }),
          (error: any) => {
            console.log(error);
          };
      }
    }
  }

  return() {
    this._router.navigate(['/clients']);
  }
}
