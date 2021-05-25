import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AePersonasComponent } from './ae-personas.component';

describe('AePersonasComponent', () => {
  let component: AePersonasComponent;
  let fixture: ComponentFixture<AePersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AePersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AePersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
