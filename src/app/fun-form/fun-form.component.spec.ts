import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFormComponent } from './fun-form.component';

describe('FunFormComponent', () => {
  let component: FunFormComponent;
  let fixture: ComponentFixture<FunFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
