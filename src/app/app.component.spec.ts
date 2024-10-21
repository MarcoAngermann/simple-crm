import { TestBed } from '@angular/core/testing';
import { UserComponent } from './user/user-component';
import { Firestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


const mockFirestore = {
  collection: () => ({
    valueChanges: () => of([]),
  }),
};

describe('UserComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
        UserComponent 
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
