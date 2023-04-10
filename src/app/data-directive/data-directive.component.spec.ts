import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDirectiveComponent } from './data-directive.component';

describe('DataDirectiveComponent', () => {
  let component: DataDirectiveComponent;
  let fixture: ComponentFixture<DataDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
