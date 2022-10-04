import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinasComponent } from './medicinas.component';

describe('MedicinasComponent', () => {
  let component: MedicinasComponent;
  let fixture: ComponentFixture<MedicinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
