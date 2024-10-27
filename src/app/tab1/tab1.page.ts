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
  IonAccordion,
  IonAccordionGroup,
  IonBadge,
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
    IonAccordion,
    IonAccordionGroup,
    IonBadge,
  ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button (click)="cambiarColor()">
            <ion-icon slot="icon-only" name="heart" [color]="color" />
          </ion-button>
        </ion-buttons>
        <ion-title> Biografía del Autor 👨‍💻 </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <main class="flex flex-col m-4 gap-y-4">
        <ion-item-divider>
          <h1 class="text-xl font-bold mx-auto">Autor: Jhon Mata 👨‍🎓</h1>
        </ion-item-divider>
        <ion-card class="rounded-lg p-3">
          <ion-card-header>
            <ion-card-title
              ><h1 class="text-3xl text-center font-bold">
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
              <a href="https://facebook.com/jhon.mata04" target="_blank">
                <img
                  src="https://img.shields.io/badge/Facebook-1877F2.svg?logo=Facebook&logoColor=white"
                  alt="Enlace a mi Facebook"
                  target="_blank"
                />
              </a>
              <a href="https://instagram.com/jhonmata0427" target="_blank">
                <img
                  src="https://img.shields.io/badge/Instagram-E52765.svg?logo=Instagram&logoColor=white"
                  alt="Enlace a mi Instagram"
                  target="_blank"
                />
              </a>
              <a href="https://github.com/JohnMata0427" target="_blank">
                <img
                  src="https://img.shields.io/badge/GitHub-1F2328.svg?logo=GitHub&logoColor=white"
                  alt="Enlace a mi GitHub"
                  target="_blank"
                />
              </a>
              <a href="https://www.linkedin.com/in/jhon0427" target="_blank">
                <img
                  src="https://img.shields.io/badge/LinkedIn-0077B5.svg?logo=linkedin&logoColor=white"
                  alt="Enlace a mi LinkedIn"
                  target="_blank"
                />
              </a>
              <a
                href="https://discordapp.com/users/477195016562016256"
                target="_blank"
              >
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
          >Presiona para ver un mensaje</ion-button
        >
        <ion-alert
          trigger="present-alert"
          header="Mensaje de Bienvenida"
          message="Hola, ¿Que tal? Soy Jhon Mata, un Desarollador Full-Stack. Gracias por visitar mi perfil."
          [buttons]="['Salir']"
        ></ion-alert>

        <ion-img
          src="https://github.com/JohnMata0427/JohnMata0427/assets/150484680/4a82b0c1-497d-4974-b167-38d2574fa474"
          alt="Banner de presentación"
        ></ion-img>

        <h1 class="text-3xl text-center font-bold">🪐 Habilidades:</h1>
        <ion-list>
          <ion-item>
            <ion-label>Frontend</ion-label>
            <ion-badge color="primary">5 tecnologías</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Backend</ion-label>
            <ion-badge color="secondary">7 tecnologías</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Movil</ion-label>
            <ion-badge color="tertiary">3 tecnologías</ion-badge>
          </ion-item>
        </ion-list>

        <h1 class="text-3xl text-center font-bold">🌌 Estadísticas:</h1>

        <ion-accordion-group>
          <ion-accordion value="first">
            <ion-item slot="header">
              <ion-label>Mís estadísticas de GitHub</ion-label>
            </ion-item>
            <div class="ion-padding" slot="content">
              <ion-img
                src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=johnmata0427&theme=discord_old_blurple"
                alt="Estadísticas de GitHub"
              ></ion-img>
            </div>
          </ion-accordion>
        </ion-accordion-group>
      </main>
    </ion-content>
  `,
})
export class Tab1Page {
  color: string = 'dark';
  constructor() {
    addIcons({ heart });
  }

  cambiarColor() {
    this.color === 'dark' ? (this.color = 'danger') : (this.color = 'dark');
  }
}
