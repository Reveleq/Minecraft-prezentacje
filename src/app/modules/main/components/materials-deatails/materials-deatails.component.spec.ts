import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsDeatailsComponent } from './materials-deatails.component';

describe('MaterialsDeatailsComponent', () => {
  let component: MaterialsDeatailsComponent;
  let fixture: ComponentFixture<MaterialsDeatailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialsDeatailsComponent]
    });
    fixture = TestBed.createComponent(MaterialsDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
