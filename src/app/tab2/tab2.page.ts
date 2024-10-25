import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> GitHub </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <div class="h-full w-full grid place-content-center space-y-4">
        <img
          class="border-white border-4 rounded-full w-3/4 h-auto mx-auto"
          src="https://github.com/JohnMata0427.png"
          alt="Mi foto de perfil"
        />
        <h1 class="text-2xl text-center font-bold">Enlace al Repositorio de la App</h1>
        <a class="bg-blue-700 rounded-lg p-2 text-white text-center m-auto" href="">Ir al Repositorio</a>
      </div>
    </ion-content>
  `,
})
export class Tab2Page {
  constructor() {}
}
