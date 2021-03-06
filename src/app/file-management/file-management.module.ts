import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ManagementComponent } from './management/management.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FileManagementComponent } from './file-management.component';
import { FormsModule } from '@angular/forms'

import { FileManagementRoutingModule } from './file-management-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ConfigurationService } from './configuration/configuration.service';
import { ManagementService } from './management/management.service';
import { SelectModule } from '@static-resources';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    NgZorroAntdModule,
    SelectModule,
    FileManagementRoutingModule,
    FormsModule
  ],
  declarations: [
    FileManagementComponent,
    ManagementComponent,
    ConfigurationComponent
  ],
  // providers: [ConfigurationService]
})
export class FileManagementModule { }
