import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNaturistasComponent } from './lista-naturistas.component';

describe('ListaNaturistasComponent', () => {
  let component: ListaNaturistasComponent;
  let fixture: ComponentFixture<ListaNaturistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNaturistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNaturistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
