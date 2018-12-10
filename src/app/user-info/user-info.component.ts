import { Component, OnInit, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
  @Input() systemInfo: object;
  @Input() loginInfo: object;
  //是否正在登录
  islogining = false;
  loginValidateForm: FormGroup;
  updatePwdValidateForm: FormGroup;
  isConfirmLoading = false;
  isUpdatePassword = false;

  //表单验证是否通过
  bCheckValidateForm(scope) {
    if (scope.status === 'VALID') return true;
    if (scope.status === 'INVALID') return false;
  }

  login() {
    //是否正在登录
    this.islogining = true;
  }

  logout() {
    this.loginInfo = {
      isLoginIn: false
    };
  }

  submitForm(): void {
    for (const i in this.loginValidateForm.controls) {
      this.loginValidateForm.controls[ i ].markAsDirty();
      this.loginValidateForm.controls[ i ].updateValueAndValidity();
    }
    if (this.bCheckValidateForm(this.loginValidateForm)) {
      this.submit();
    } else {
      this.message.info('请完善表单！');
    }
  }

  submit(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isConfirmLoading = false;
      this.islogining = false;
      this.loginInfo = {
        isLoginIn: true
      };
      this.message.create('success', '登陆成功！');
    }, 3000);
  }

  loginModelClose(): void {
    this.islogining = false;
  }

  updatePassword() {
    this.isUpdatePassword = true;
  }

  submitPwdForm(): void {
    for (const i in this.updatePwdValidateForm.controls) {
      this.updatePwdValidateForm.controls[ i ].markAsDirty();
      this.updatePwdValidateForm.controls[ i ].updateValueAndValidity();
    }
    if (this.bCheckValidateForm(this.updatePwdValidateForm)) {
      this.submitPwd();
    } else {
      this.message.info('请完善表单！');
      console.log(this.updatePwdValidateForm);
    }
  }

  submitPwd(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isConfirmLoading = false;
      this.isUpdatePassword = false;
      this.message.create('success', '修改成功！');
    }, 3000);
  }
  
  updatePwdModelClose(): void {
    this.isUpdatePassword = false;
    for (const i in this.updatePwdValidateForm.controls) {
      this.updatePwdValidateForm.controls[ i ].markAsPristine();
      this.updatePwdValidateForm.controls[ i ].markAsPending();
    }
  }

  constructor(private fb: FormBuilder, private message: NzMessageService) { }

  ngOnInit() {
    this.loginValidateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ]
    });
    this.updatePwdValidateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      newPassword: [ null, [ Validators.required ] ],
      checkPassword: [ null, [ Validators.required ] ]
    });
    console.log(this.updatePwdValidateForm);
  }

}
