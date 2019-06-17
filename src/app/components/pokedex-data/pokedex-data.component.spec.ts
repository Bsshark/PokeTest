import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexDataComponent } from './pokedex-data.component';

describe('PokedexDataComponent', () => {
  let component: PokedexDataComponent;
  let fixture: ComponentFixture<PokedexDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
