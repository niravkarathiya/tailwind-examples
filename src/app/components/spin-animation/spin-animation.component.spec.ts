import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinAnimationComponent } from './spin-animation.component';

describe('SpinAnimationComponent', () => {
  let component: SpinAnimationComponent;
  let fixture: ComponentFixture<SpinAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpinAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
