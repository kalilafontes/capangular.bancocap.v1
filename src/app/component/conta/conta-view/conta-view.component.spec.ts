import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaViewComponent } from './conta-view.component';

describe('ContaViewComponent', () => {
  let component: ContaViewComponent;
  let fixture: ComponentFixture<ContaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
