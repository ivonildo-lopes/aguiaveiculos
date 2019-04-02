import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirebaseComponent } from './firebase.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FirebaseService } from './firebase.service';
import { ContatoDataService } from './contato-data.service';
import { FirebaseRoutingModule } from './firebase-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FirebaseRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [FirebaseService, ContatoDataService],
  declarations: [
    FirebaseComponent,
    FormComponent,
    ListComponent
  ]
})
export class FirebaseModule { }
