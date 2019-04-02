import { RouterModule } from '@angular/router';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container/container.component';
import { LoadingService } from '../shared/loading';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    RouterModule,
    LayoutModule,
  ],
  providers: [LoadingService]
})
export class ContainerModule { }
