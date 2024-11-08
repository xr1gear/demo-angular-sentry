import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCommandsComponent } from './angular-commands.component';

describe('AngularCommandsComponent', () => {
  let component: AngularCommandsComponent;
  let fixture: ComponentFixture<AngularCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCommandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
