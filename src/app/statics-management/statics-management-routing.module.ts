import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StaticsManagementComponent } from './statics-management.component';
import { TjfxComponent } from './tjfx/tjfx.component';
import { KqhzComponent } from './kqhz/kqhz.component';

const StaticsManagementRoutes: Routes = [
  {
    path: '',
    component: StaticsManagementComponent,
    children: [
      { path: 'tjfx', component: TjfxComponent, data: { title: '统计分析', shouldDetach: true } },
      { path: 'kqhz', component: KqhzComponent, data: { title: '考勤汇总', shouldDetach: true } }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(StaticsManagementRoutes)],
  exports: [RouterModule]
})
export class StaticsManagementRoutingModule { }
