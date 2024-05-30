import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EnterNumberComponent } from './enter-number.component';

describe('EnterNumberComponent', () => {
  let component: EnterNumberComponent;
  let fixture: ComponentFixture<EnterNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
