import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportUsComponent } from './support-us.component';

describe('SupportUsComponent', () => {
  let component: SupportUsComponent;
  let fixture: ComponentFixture<SupportUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportUsComponent]
    });
    fixture = TestBed.createComponent(SupportUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
