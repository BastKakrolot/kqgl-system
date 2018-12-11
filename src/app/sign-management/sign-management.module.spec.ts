import { SignManagementModule } from './sign-management.module';

describe('SignManagementModule', () => {
  let signManagementModule: SignManagementModule;

  beforeEach(() => {
    signManagementModule = new SignManagementModule();
  });

  it('should create an instance', () => {
    expect(signManagementModule).toBeTruthy();
  });
});
