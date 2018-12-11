import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SignManagementComponent } from './sign-management.component';
import { QdckComponent } from './qdck/qdck.component';
import { JzgzComponent } from './jzgz/jzgz.component';
import { QdfxComponent } from './qdfx/qdfx.component';
import { RlzsComponent } from './rlzs/rlzs.component';

const SignManagementRoutes: Routes = [
  {
    path: '',
    component: SignManagementComponent,
    children: [
      { path: 'qdck', component: QdckComponent, data: { title: '签到查看', shouldDetach: true } },
      { path: 'jzgz', component: JzgzComponent, data: { title: '矫正规则', shouldDetach: true } },
      { path: 'qdfx', component: QdfxComponent, data: { title: '签到分析', shouldDetach: true } },
      { path: 'rlzs', component: RlzsComponent, data: { title: '日历展示', shouldDetach: true } }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(SignManagementRoutes)],
  exports: [RouterModule]
})
export class SignManagementRoutingModule { }
