import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef, NzMessageService, NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'gm-modal-more',
  templateUrl: './gm-modal-more.component.html',
  styleUrls: ['./gm-modal-more.component.less']
})
export class GmModalMoreComponent implements OnInit {
  @Input() detail;
  @Input() moduleName: string;
  @Input() nodes;
  updateUserinfoForm: FormGroup;
  liveForm: FormGroup;
  //表单验证是否通过
  bCheckValidateForm(scope) {
    if (scope.status === 'VALID') return true;
    if (scope.status === 'INVALID') return false;
  }
  saveUserForm() {
    console.log('imin saveUserForm');
    this.closeModel();
  }
  liveUserForm() {
    for (const i in this.liveForm.controls) {
      this.liveForm.controls[ i ].markAsDirty();
      this.liveForm.controls[ i ].updateValueAndValidity();
    }
    if (this.bCheckValidateForm(this.liveForm)) {
      console.log('imin liveUserForm');
      console.log(this.liveForm);
      this.closeModel(this.liveForm.controls);
    } else {
      this.message.info('请完善表单！');
      console.log(this.liveForm);
    }
  }
  closeModel(formScope?): void {
    this.modal.destroy();
    if (formScope) {
      for (const i in formScope.controls) {
        formScope.controls[ i ].markAsPristine();
        formScope.controls[ i ].markAsPending();
      }
    }
  }
  constructor(private fb: FormBuilder, private message: NzMessageService, private modal: NzModalRef) { }

  ngOnInit() {
    this.updateUserinfoForm = this.fb.group({
      employeeNo: [ this.detail.employeeNo, [ Validators.required ] ],
      signInNo: [ this.detail.signInNo, [ Validators.required ] ],
      userName: [ this.detail.userName, [ Validators.required ] ],
      password: [ this.detail.password, [ Validators.required ] ],
      region: [ this.detail.region, [ Validators.required ] ],
      depName: [ this.detail.depName, [ Validators.required ] ],
      duty: [ this.detail.duty, [ Validators.required ] ],
      role: [ this.detail.role, [ Validators.required ] ],
      entryDate: [ this.detail.entryDate, [ Validators.required ] ],
      socialWorkingAge: [ this.detail.socialWorkingAge, [ Validators.required ] ],
      graduationDate: [ this.detail.graduationDate, [ Validators.required ] ]
    });
    this.liveForm = this.fb.group({
      leaveDate: [ null, [ Validators.required ] ]
    });
  }

}
