import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModiComponent } from './form-modi.component';

describe('FormModiComponent', () => {
  let component: FormModiComponent;
  let fixture: ComponentFixture<FormModiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
