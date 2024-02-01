import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovrolinComponent } from './covrolin.component';

describe('CovrolinComponent', () => {
  let component: CovrolinComponent;
  let fixture: ComponentFixture<CovrolinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CovrolinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CovrolinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
