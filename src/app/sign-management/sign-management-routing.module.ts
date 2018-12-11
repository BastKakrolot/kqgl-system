import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignManagementComponent } from './sign-management.component';
// import { ManagementComponent } from './management/management.component';
// import { ConfigurationComponent } from './configuration/configuration.component';

const SignManagementRoutes: Routes = [
  {
    path: '',
    component: SignManagementComponent,
    children: [
      // { path: 'management', component: ManagementComponent, data: { title: '档案管理', shouldDetach: true } },
      // { path: 'configuration', component: ConfigurationComponent, data: { title: '档案配置', shouldDetach: true } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(SignManagementRoutes)],
  exports: [RouterModule]
})
export class SignManagementRoutingModule { }
