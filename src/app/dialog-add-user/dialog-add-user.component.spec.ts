import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogAddUserComponent } from './dialog-add-user.component';
import { Firestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    const firestoreMock = {
      collection: () => ({
        valueChanges: () => of([]),
      }),
    };

    const matDialogRefMock = {
      close: jasmine.createSpy('close'),
    };

    await TestBed.configureTestingModule({
      imports: [
        DialogAddUserComponent,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: Firestore, useValue: firestoreMock },
        { provide: MatDialogRef, useValue: matDialogRefMock }
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




