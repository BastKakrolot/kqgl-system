import { StaticsManagementModule } from './statics-management.module';

describe('StaticsManagementModule', () => {
  let staticsManagementModule: StaticsManagementModule;

  beforeEach(() => {
    staticsManagementModule = new StaticsManagementModule();
  });

  it('should create an instance', () => {
    expect(staticsManagementModule).toBeTruthy();
  });
});
