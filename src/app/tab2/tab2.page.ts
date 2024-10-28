import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItemDivider,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItemDivider],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> GitHub 🗃️ </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <main class="grid place-content-center gap-4 m-4">
        <ion-item-divider>
          <h1 class="text-xl font-bold mx-auto">Código abierto en GitHub 📒</h1>
        </ion-item-divider>
        <img
          class="border-zinc-300 border-8 rounded-full w-3/4 h-auto mx-auto"
          src="https://github.com/JohnMata0427.png"
          alt="Mi foto de perfil"
        />
        <h1 class="text-xl text-center font-bold">
          Enlace al Repositorio de la App
        </h1>
        <a
          class="bg-blue-700 rounded-lg py-2 px-4 text-white text-center m-auto"
          href="https://github.com/JohnMata0427/prueba-bimestral-01"
          target="_blank"
          >Ir al Repositorio</a
        >
      </main>
    </ion-content>
  `,
})
export class Tab2Page {
  constructor() {}
}
