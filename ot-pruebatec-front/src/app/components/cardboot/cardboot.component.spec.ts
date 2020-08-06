import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbootComponent } from './cardboot.component';

describe('CardbootComponent', () => {
  let component: CardbootComponent;
  let fixture: ComponentFixture<CardbootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardbootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
