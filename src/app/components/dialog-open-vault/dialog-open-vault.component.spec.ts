import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOpenVaultComponent } from './dialog-open-vault.component';

describe('DialogOpenVaultComponent', () => {
  let component: DialogOpenVaultComponent;
  let fixture: ComponentFixture<DialogOpenVaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOpenVaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOpenVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
