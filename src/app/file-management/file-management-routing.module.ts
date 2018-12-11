import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FileManagementComponent } from './file-management.component';
import { ManagementComponent } from './management/management.component';
import { ConfigurationComponent } from './configuration/configuration.component';

const FileManagementRoutes: Routes = [
  {
    path: '',
    component: FileManagementComponent,
    children: [
      { path: 'management', component: ManagementComponent, data: { title: '查看用户', shouldDetach: true } },
      { path: 'configuration', component: ConfigurationComponent, data: { title: '查看部门', shouldDetach: true } }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(FileManagementRoutes)],
  exports: [RouterModule]
})
export class FileManagementRoutingModule { }
