import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImconfigDetailsComponent } from './imconfig-details.component';

describe('ImconfigDetailsComponent', () => {
  let component: ImconfigDetailsComponent;
  let fixture: ComponentFixture<ImconfigDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImconfigDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImconfigDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
