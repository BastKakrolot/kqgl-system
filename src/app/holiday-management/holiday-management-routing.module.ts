import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HolidayManagementComponent } from './holiday-management.component';
import { QjglComponent } from './qjgl/qjgl.component';
import { JbglComponent } from './jbgl/jbgl.component';
import { TxglComponent } from './txgl/txgl.component';
import { TxtjComponent } from './txtj/txtj.component';

const HolidayManagementRoutes: Routes = [
  {
    path: '',
    component: HolidayManagementComponent,
    children: [
      { path: 'qjgl', component: QjglComponent, data: { title: '请假管理', shouldDetach: true } },
      { path: 'jbgl', component: JbglComponent, data: { title: '加班管理', shouldDetach: true } },
      { path: 'txgl', component: TxglComponent, data: { title: '年假调休假管理', shouldDetach: true } },
      { path: 'txtj', component: TxtjComponent, data: { title: '年假调休假统计', shouldDetach: true } }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(HolidayManagementRoutes)],
  exports: [RouterModule]
})
export class HolidayManagementRoutingModule { }
