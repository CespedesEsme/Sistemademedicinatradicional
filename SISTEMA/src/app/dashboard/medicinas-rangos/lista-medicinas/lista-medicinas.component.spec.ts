import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMedicinasComponent } from './lista-medicinas.component';

describe('ListaMedicinasComponent', () => {
  let component: ListaMedicinasComponent;
  let fixture: ComponentFixture<ListaMedicinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMedicinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMedicinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
