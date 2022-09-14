import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDePesquisaComponent } from './barra-de-pesquisa.component';

describe('BarraDePesquisaComponent', () => {
  let component: BarraDePesquisaComponent;
  let fixture: ComponentFixture<BarraDePesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDePesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraDePesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
