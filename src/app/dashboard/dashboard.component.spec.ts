import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard.component';
import { Firestore } from '@angular/fire/firestore';
import { of } from 'rxjs';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const firestoreMock = {
      collection: () => ({
        valueChanges: () => of([]),
      }),
    };

    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, DashboardComponent],
      providers: [
        { provide: Firestore, useValue: firestoreMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

