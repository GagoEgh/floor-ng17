import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorCoveringsComponent } from './floor-coverings.component';

describe('FloorCoveringsComponent', () => {
  let component: FloorCoveringsComponent;
  let fixture: ComponentFixture<FloorCoveringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorCoveringsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloorCoveringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
