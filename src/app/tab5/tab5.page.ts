import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTextarea,
  IonButton,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab5',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonTextarea,
    IonButton,
    ReactiveFormsModule,
    IonItem,
    IonLabel,
  ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Introducir y Guardar Texto en Archivo </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <form [formGroup]="form" (ngSubmit)="guardarTexto()">
        <ion-item>
          <ion-label position="floating">Texto</ion-label>
          <ion-textarea formControlName="texto"></ion-textarea>
        </ion-item>
        <ion-button expand="full" type="submit" [disabled]="form.invalid"
          >Guardar</ion-button
        >
      </form>
      @if (mensaje) {
      <div>{{ mensaje }}</div>
      }
    </ion-content>
  `,
})
export class Tab5Page {
  form: FormGroup;
  mensaje: string | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      texto: ['', Validators.required],
    });
  }

  async guardarTexto() {
    if (this.form.valid) {
      const texto = this.form.value.texto;
      try {
        await Filesystem.writeFile({
          path: 'texto_guardado.txt',
          data: texto,
          directory: Directory.Documents,
          encoding: Encoding.UTF8,
        });
        this.mensaje = 'Texto guardado exitosamente!';
      } catch (e) {
        this.mensaje = 'Error al guardar el texto: ' + e;
      }
    }
  }
}
