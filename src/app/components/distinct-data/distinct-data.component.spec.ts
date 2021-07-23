import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctDataComponent } from './distinct-data.component';

describe('DistinctDataComponent', () => {
  let component: DistinctDataComponent;
  let fixture: ComponentFixture<DistinctDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
