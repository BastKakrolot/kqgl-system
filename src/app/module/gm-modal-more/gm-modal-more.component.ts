import { Component, OnInit, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
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
  updateUserinfoForm: FormGroup;
  //表单验证是否通过
  bCheckValidateForm(scope) {
    if (scope.status === 'VALID') return true;
    if (scope.status === 'INVALID') return false;
  }
  constructor(private fb: FormBuilder, private message: NzMessageService) { }

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
  }

}
