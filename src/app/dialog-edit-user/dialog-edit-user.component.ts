import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar'; // Korrektur hier
import { User } from '../../models/user.class';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatProgressBarModule, // Korrektur hier
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  user: User | undefined;
  loading: boolean = false;
  birthDate!: Date;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  saveUser() {
    this.loading = true;  // Zeigt den Ladebalken an
    // Füge hier die Logik zum Speichern des Benutzers hinzu
    // Simuliert einen Ladevorgang:
    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close(this.user);  // Schließt den Dialog nach dem Speichern
    }, 2000);  // Simuliert eine Verzögerung von 2 Sekunden
  }
}

