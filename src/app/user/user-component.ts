import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    MatButtonModule,
    MatTooltipModule,
    DialogAddUserComponent,
    MatDialogModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './user-component.html',
  styleUrls: ['./user-component.scss']
})
export class UserComponent {
  user = new User();
  allUsers: any[] = [];
  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');
    collectionData(usersCollection, { idField: 'id' }).subscribe((changes: any[]) => {
      console.log(changes);
      this.allUsers = changes;
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
