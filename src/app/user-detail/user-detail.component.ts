import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCard, MatCardContent, CommonModule, MatCardTitle],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  userId = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id') ?? '';
      console.log('The user id is: ', this.userId);
      if (this.userId) {
        this.getUsers(this.userId);
      }
    });
  }

  async getUsers(userId: string) {
    try {
      const userDoc = doc(this.firestore, `users/${userId}`);
      const userSnap = await getDoc(userDoc);
      
      if (userSnap.exists()) {
        const userData = userSnap.data(); // Prüfen, ob Daten existieren
        console.log('The user is: ', userData);
        
        this.user = new User(userData); // Daten an die User-Klasse übergeben
      } else {
        console.log('No such user document!');
      }
    } catch (error) {
      console.error('Error fetching user: ', error);
    }
  }
}

