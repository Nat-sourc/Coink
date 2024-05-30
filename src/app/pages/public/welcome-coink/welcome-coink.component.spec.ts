import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCoinkComponent } from './welcome-coink.component';

describe('WelcomeCoinkComponent', () => {
  let component: WelcomeCoinkComponent;
  let fixture: ComponentFixture<WelcomeCoinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeCoinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomeCoinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
