import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SignManagementComponent } from './sign-management.component';
import { QdckComponent } from './qdck/qdck.component';
import { JzgzComponent } from './jzgz/jzgz.component';
import { QdfxComponent } from './qdfx/qdfx.component';
import { RlzsComponent } from './rlzs/rlzs.component';

import { SignManagementRoutingModule } from './sign-management-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SelectModule } from '@static-resources';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    NgZorroAntdModule,
    SelectModule,
    SignManagementRoutingModule
  ],
  declarations: [
    SignManagementComponent,
    QdckComponent,
    JzgzComponent,
    QdfxComponent,
    RlzsComponent,
  ],
  // providers: [ConfigurationService]
})
export class SignManagementModule { }
