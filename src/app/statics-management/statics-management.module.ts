import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StaticsManagementComponent } from './statics-management.component';
import { TjfxComponent } from './tjfx/tjfx.component';
import { KqhzComponent } from './kqhz/kqhz.component';

import { StaticsManagementRoutingModule } from './statics-management-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SelectModule } from '@static-resources';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    NgZorroAntdModule,
    SelectModule,
    StaticsManagementRoutingModule
  ],
  declarations: [
    StaticsManagementComponent,
    TjfxComponent,
    KqhzComponent,
  ],
  // providers: [ConfigurationService]
})
export class StaticsManagementModule { }
