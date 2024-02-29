import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovrolinParametrComponent } from './covrolin-parametr.component';

describe('CovrolinParametrComponent', () => {
  let component: CovrolinParametrComponent;
  let fixture: ComponentFixture<CovrolinParametrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CovrolinParametrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CovrolinParametrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
