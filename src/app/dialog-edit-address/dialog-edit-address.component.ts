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

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressBar,
    MatDialogContent,
    MatDialogActions,
    MatInputModule,
    MatDialogClose,
    MatButtonModule,
    MatCardModule,
    MatDialogTitle,
    MatProgressBar,
    MatDialogActions,
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user: User | undefined;
  loading: boolean = false; // Hinzufügen der loading-Variable

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) { }

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

