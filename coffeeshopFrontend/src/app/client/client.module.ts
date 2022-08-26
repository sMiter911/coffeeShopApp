import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { AddeditclientComponent } from './addeditclient/addeditclient.component';
import { ViewclientComponent } from './viewclient/viewclient.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
  },
  {
    path: 'add',
    component: AddeditclientComponent,
  },
  {
    path: 'edit/:id',
    component: AddeditclientComponent,
  },
  {
    path: 'view/:id',
    component: ViewclientComponent,
  },
];

@NgModule({
  declarations: [ClientsComponent, AddeditclientComponent, ViewclientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class ClientModule {}
