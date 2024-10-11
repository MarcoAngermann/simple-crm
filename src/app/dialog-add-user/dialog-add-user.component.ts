import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    MatButtonModule,
    MatDialogTitle,
    MatDatepickerModule,
    MatProgressBarModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'], // Hier sollte styleUrls sein, nicht styleUrl
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;

  loading = false;

  constructor(private firestore: Firestore) {}

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.loading = true;
  
    // Umwandlung des User-Objekts in ein einfaches Objekt
    const userData = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      birthDate: this.user.birthDate,
      street: this.user.street,
      zipCode: this.user.zipCode,
      city: this.user.city
    };
  
    // Referenz zur 'users' Sammlung erstellen
    const usersCollection = collection(this.firestore, 'users');
  
    // Benutzer zur Sammlung hinzufügen
    addDoc(usersCollection, userData)
      .then((result) => {
        this.loading = false;
        console.log('User added successfully!', result);
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      } );

    
}
}
