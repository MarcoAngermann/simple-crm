import { TestBed } from '@angular/core/testing';
import { UserComponent } from './user-component'; 
import { Firestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';  


const mockFirestore = {
  collection: () => ({
    valueChanges: () => of([]),  
  }),
};

describe('UserComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserComponent,
        MatDialogModule,  
      ],
      providers: [{ provide: Firestore, useValue: mockFirestore }],  
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy(); 
  });
});
