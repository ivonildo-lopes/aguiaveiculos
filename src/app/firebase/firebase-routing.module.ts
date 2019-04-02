import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../container/container/container.component';
import { FirebaseComponent } from './firebase.component';


const routes: Routes = [
  { path: '',
    component: ContainerComponent,
    children: [
      { path: 'contato', component: FirebaseComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirebaseRoutingModule { }
