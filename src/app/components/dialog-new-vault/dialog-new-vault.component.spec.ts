import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewVaultComponent } from './dialog-new-vault.component';

describe('DialogNewVaultComponent', () => {
  let component: DialogNewVaultComponent;
  let fixture: ComponentFixture<DialogNewVaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogNewVaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNewVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
