import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule,MatIcon,RouterLink,MatButtonModule,MatTooltipModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
