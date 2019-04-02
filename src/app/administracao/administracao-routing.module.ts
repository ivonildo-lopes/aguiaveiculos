import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../container/container/container.component';
import { VeiculoCadastroComponent } from './veiculo/veiculo-cadastro/veiculo-cadastro.component';
import { VeiculoConsultaComponent } from './veiculo/veiculo-consulta/veiculo-consulta.component';

const routes: Routes = [
  // { path: 'admin', redirectTo: '/admin/veiculo/cadastro', pathMatch: 'full' },
  { path: '',
    component: ContainerComponent,
    children: [
      { path: 'veiculo/cadastro', component: VeiculoCadastroComponent},
      { path: 'veiculo/consulta/:id', component: VeiculoCadastroComponent},
      { path: 'veiculo/consulta', component: VeiculoConsultaComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracaoRoutingModule { }
