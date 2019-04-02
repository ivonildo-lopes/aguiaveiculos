import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../container/container/container.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  { path: '',
    component: ContainerComponent,
    children: [
      { path: 'pdf', component: PdfComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfRoutingModule { }
