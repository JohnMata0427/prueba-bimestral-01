import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonDatetime,
  IonItem,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonDatetime,
    IonItem,
    IonLabel,
    IonButton,
    FormsModule,
  ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Calcular Diferencia de Días </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <main class="grid place-content-center m-4 space-y-4">
        <div class="flex flex-col items-center">
          <ion-label>Primera Fecha</ion-label>
          <ion-datetime
            display-format="MM/DD/YYYY"
            [(ngModel)]="primeraFecha"
          ></ion-datetime>
        </div>
        <div class="flex flex-col items-center">
          <ion-label>Segunda Fecha</ion-label>
          <ion-datetime
            display-format="MM/DD/YYYY"
            [(ngModel)]="segundaFecha"
          ></ion-datetime>
        </div>

        <div class="flex flex-col items-center gap-y-4">
          <ion-button (click)="calcularDiferencia()"
            >Calcular</ion-button
          >
          @if (diferencia !== null) {
          <div>Diferencia: {{ diferencia }} días</div>
          }
        </div>
      </main>
    </ion-content>
  `,
})
export class Tab3Page {
  primeraFecha!: string;
  segundaFecha!: string;
  diferencia: number | null = null;

  constructor() {}

  calcularDiferencia() {

    if (!this.primeraFecha || !this.segundaFecha) {
      return alert('Por favor, seleccione ambas fechas');
    }

    if (this.primeraFecha && this.segundaFecha) {
      const inicio = new Date(this.primeraFecha);
      const final = new Date(this.segundaFecha);
      const tiempo = Math.abs(final.getTime() - inicio.getTime());
      this.diferencia = Math.ceil(tiempo / (1000 * 3600 * 24));
    } else {
      this.diferencia = null;
    }
  }
}
