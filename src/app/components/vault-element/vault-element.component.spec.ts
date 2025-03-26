import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultElementComponent } from './vault-element.component';

describe('VaultElementComponent', () => {
  let component: VaultElementComponent;
  let fixture: ComponentFixture<VaultElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaultElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaultElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
