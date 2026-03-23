import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountDeatilsComponent } from './user-account-deatils.component';

describe('UserAccountDeatilsComponent', () => {
  let component: UserAccountDeatilsComponent;
  let fixture: ComponentFixture<UserAccountDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccountDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
