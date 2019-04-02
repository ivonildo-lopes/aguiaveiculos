import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracaoRoutingModule } from './administracao-routing.module';
import { AdministracaoService } from './administracao.service';

import { VeiculoCadastroComponent } from './veiculo/veiculo-cadastro/veiculo-cadastro.component';
import { VeiculoConsultaComponent } from './veiculo/veiculo-consulta/veiculo-consulta.component';
import { VeiculoService } from './veiculo/veiculo.service';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdministracaoRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [VeiculoCadastroComponent, VeiculoConsultaComponent],
  providers: [AdministracaoService, VeiculoService]
})
export class AdministracaoModule { }
