import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingDialogComponent } from './ordering-dialog.component';

describe('OrderingDialogComponent', () => {
  let component: OrderingDialogComponent;
  let fixture: ComponentFixture<OrderingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderingDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
