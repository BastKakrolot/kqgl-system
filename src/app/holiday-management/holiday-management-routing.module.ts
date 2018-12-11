import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolidayManagementComponent } from './holiday-management.component';
// import { ManagementComponent } from './management/management.component';
// import { ConfigurationComponent } from './configuration/configuration.component';

const HolidayManagementRoutes: Routes = [
  {
    path: '',
    component: HolidayManagementComponent,
    children: [
      // { path: 'management', component: ManagementComponent, data: { title: '档案管理', shouldDetach: true } },
      // { path: 'configuration', component: ConfigurationComponent, data: { title: '档案配置', shouldDetach: true } },
      // { path: 'management', component: ManagementComponent, data: { title: '档案管理', shouldDetach: true } },
      // { path: 'configuration', component: ConfigurationComponent, data: { title: '档案配置', shouldDetach: true } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(HolidayManagementRoutes)],
  exports: [RouterModule]
})
export class HolidayManagementRoutingModule { }
