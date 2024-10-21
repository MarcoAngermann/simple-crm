import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
      projectId: "simple-crm-22dcf",
      appId: "1:803037810948:web:a54bc31c21a7542b544051",
      storageBucket: "simple-crm-22dcf.appspot.com",
      apiKey: "AIzaSyDlbM2RYVSDJwKaBQ1PgFegkztVT5UtEvA",
      authDomain: "simple-crm-22dcf.firebaseapp.com",
      messagingSenderId: "803037810948"
    })),
    provideFirestore(() => getFirestore()),
    MatDialogModule,
    BrowserAnimationsModule
  ]
};
