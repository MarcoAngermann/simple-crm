import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBar } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatProgressBar,
    MatDialogContent,
    MatDialogActions,
    MatInputModule,
    MatDialogClose,
    MatButtonModule,
    MatCardModule,
    MatDialogTitle,
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user: User | undefined;
  loading: boolean = false; 
  userId!: string;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: Firestore) { }

  saveUser() {
    this.loading = true;
    
    const userDocRef = doc(this.firestore, `users/${this.userId}`);

    updateDoc(userDocRef, {
      street: this.user?.street,
      city: this.user?.city, 
      zipCode: this.user?.zipCode,   
    }).then(() => {
      this.loading = false;
      this.dialogRef.close(this.user);
    }).catch(error => {
      console.error('Error updating address: ', error);
      this.loading = false; 
    });
  }
}



