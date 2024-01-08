import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooringSelComponent } from './flooring-sel.component';

describe('FlooringSelComponent', () => {
  let component: FlooringSelComponent;
  let fixture: ComponentFixture<FlooringSelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlooringSelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlooringSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
