import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HolidayManagementComponent } from './holiday-management.component';
import { QjglComponent } from './qjgl/qjgl.component';
import { JbglComponent } from './jbgl/jbgl.component';
import { TxglComponent } from './txgl/txgl.component';
import { TxtjComponent } from './txtj/txtj.component';

import { HolidayManagementRoutingModule } from './holiday-management-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SelectModule } from '@static-resources';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    NgZorroAntdModule,
    SelectModule,
    HolidayManagementRoutingModule
  ],
  declarations: [
    HolidayManagementComponent,
    QjglComponent,
    JbglComponent,
    TxglComponent,
    TxtjComponent
  ],
  // providers: [ConfigurationService]
})
export class HolidayManagementModule { }
