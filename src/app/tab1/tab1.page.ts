import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonAlert,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonImg,
  IonButtons,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonAlert,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonItem,
    IonLabel,
    IonItemDivider,
    IonImg,
    IonButtons,
    IonIcon,
  ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button>
            <ion-icon slot="icon-only" name="heart" (click)="cambiarColor()"
            [color]="color"
            ></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title> Biografía del Autor </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <main class="flex flex-col m-4 gap-y-4">
        <ion-item-divider>
          <h1 class="text-4xl text-center font-bold">👨‍💻 Jhon Mata</h1>
        </ion-item-divider>
        <ion-card class="rounded-lg p-3">
          <ion-card-header>
            <ion-card-title
              ><h1 class="text-4xl text-center font-bold">
                💫 Sobre Mí:
              </h1></ion-card-title
            >
          </ion-card-header>

          <ion-card-content>
            <p class="text-center">
              Soy un Desarollador Full-Stack con una curiosidad incesante por
              cómo funcionan las cosas. Me encanta el reto de resolver problemas
              complejos mezclando lógica y creatividad. Me apasiona el continuo
              aprendizaje y estoy constantemente explorando nuevas tecnología
              para aportar soluciones innovadoras.
            </p>
            <div class="flex flex-wrap gap-2 justify-center mt-4">
              <a href="https://facebook.com/jhon.mata04">
                <img
                  src="https://img.shields.io/badge/Facebook-1877F2.svg?logo=Facebook&logoColor=white"
                  alt="Enlace a mi Facebook"
                  target="_blank"
                />
              </a>
              <a href="https://instagram.com/jhonmata0427">
                <img
                  src="https://img.shields.io/badge/Instagram-E52765.svg?logo=Instagram&logoColor=white"
                  alt="Enlace a mi Instagram"
                  target="_blank"
                />
              </a>
              <a href="https://github.com/JohnMata0427">
                <img
                  src="https://img.shields.io/badge/GitHub-1F2328.svg?logo=GitHub&logoColor=white"
                  alt="Enlace a mi GitHub"
                  target="_blank"
                />
              </a>
              <a href="https://www.linkedin.com/in/jhon0427">
                <img
                  src="https://img.shields.io/badge/LinkedIn-0077B5.svg?logo=linkedin&logoColor=white"
                  alt="Enlace a mi LinkedIn"
                  target="_blank"
                />
              </a>
              <a href="https://discordapp.com/users/477195016562016256">
                <img
                  src="https://img.shields.io/badge/Discord-525DEA.svg?logo=discord&logoColor=white"
                  alt="Enlace a mi Discord"
                  target="_blank"
                />
              </a>
            </div>
          </ion-card-content>
        </ion-card>
        <ion-button id="present-alert" class="mx-auto" color="light"
          >Presiona para dar un saludo</ion-button
        >
        <ion-alert
          trigger="present-alert"
          header="Mensaje de Bienvenida"
          message="Hola, ¿Que tal? Soy Jhon Mata, un Desarollador Full-Stack. Gracias por visitar mi perfil."
          [buttons]="['Salir']"
        ></ion-alert>

        <ion-img
          src="https://private-user-images.githubusercontent.com/150484680/311408699-4a82b0c1-497d-4974-b167-38d2574fa474.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjk4ODIzMzUsIm5iZiI6MTcyOTg4MjAzNSwicGF0aCI6Ii8xNTA0ODQ2ODAvMzExNDA4Njk5LTRhODJiMGMxLTQ5N2QtNDk3NC1iMTY3LTM4ZDI1NzRmYTQ3NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAyNVQxODQ3MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NDMwMWRlZTc1YjY3YWM4YjE1MzNkZDFlZWQxNmM4N2U4MjQyNzJiOTBhNWM5NGZkYmFjMTIyODE2ZWQ1ZTA5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.3ALvGJDyRJWMK_Lpd6Ohds9cW5OiZjbapS6xywCFUsI"
          alt="Banner de presentación"
        ></ion-img>
        <h1 class="text-4xl text-center font-bold">🪐 Habilidades:</h1>
        <ion-list>
          <ion-item>
            <ion-label
              >Frontend: HTML, CSS, Astro, React, Tailwind CSS</ion-label
            >
          </ion-item>
          <ion-item>
            <ion-label
              >Backend: Python, C++ C#, TypeScript, Java, Spring Boot</ion-label
            >
          </ion-item>
          <ion-item>
            <ion-label>Movil: Flutter, React Native</ion-label>
          </ion-item>
        </ion-list>
      </main>
    </ion-content>
  `,
})
export class Tab1Page {
  color: string = 'danger';
  constructor() {
    addIcons({ heart });
  }

  cambiarColor() {
    if (this.color === 'danger') {
      this.color = 'dark';
    } else {
      this.color = 'danger';
    }
  }
}
