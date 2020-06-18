import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNameCardComponent } from './angular-name-card.component';

describe('AngularNameCardComponent', () => {
  let component: AngularNameCardComponent;
  let fixture: ComponentFixture<AngularNameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularNameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
