import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailComponent } from './user-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';

class FirestoreMock {
  collection() {
    return {
      doc: () => ({
        valueChanges: () => of({ name: 'Test User', id: '1' }) 
      })
    };
  }
}

class MatDialogMock {
  open() {
    return {
      afterClosed: () => of(null),
      componentInstance: {}
    };
  }
}

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserDetailComponent 
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => '1' }) 
          }
        },
        {
          provide: Firestore, 
          useClass: FirestoreMock
        },
        {
          provide: MatDialog,
          useClass: MatDialogMock
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user data on init', () => {
    spyOn(component, 'getUsers').and.callThrough(); 
    component.ngOnInit();
    expect(component.getUsers).toHaveBeenCalledWith('1'); 
  });

});




