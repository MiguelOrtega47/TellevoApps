import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroRutaPage } from './registro-ruta.page';

describe('RegistroRutaPage', () => {
  let component: RegistroRutaPage;
  let fixture: ComponentFixture<RegistroRutaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
