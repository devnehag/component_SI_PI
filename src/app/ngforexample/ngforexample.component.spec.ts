import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforexampleComponent } from './ngforexample.component';

describe('NgforexampleComponent', () => {
  let component: NgforexampleComponent;
  let fixture: ComponentFixture<NgforexampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgforexampleComponent]
    });
    fixture = TestBed.createComponent(NgforexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
