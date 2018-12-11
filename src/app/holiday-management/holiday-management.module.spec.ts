import { HolidayManagementModule } from './holiday-management.module';

describe('HolidayManagementModule', () => {
  let holidayManagementModule: HolidayManagementModule;

  beforeEach(() => {
    holidayManagementModule = new HolidayManagementModule();
  });

  it('should create an instance', () => {
    expect(holidayManagementModule).toBeTruthy();
  });
});
