import {Component} from '@angular/core';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DialogAddUserComponent} from '../dialog-add-user/dialog-add-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule,MatIcon,RouterLink,MatButtonModule,MatTooltipModule, DialogAddUserComponent,MatDialogModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
    

}
