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
  IonItemDivider,
  IonToast,
} from '@ionic/angular/standalone';
import { ReactiveFormsModule } from '@angular/forms';
import { checkbox } from 'ionicons/icons';
import { addIcons } from 'ionicons';

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
    IonToast,
    IonItemDivider,
  ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Guardar Texto en Archivo 🖋️ </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <main class="grid place-content-center m-4 space-y-4">
        <ion-item-divider>
          <h1 class="text-xl font-bold text-center">
            Introduce el texto a guardar en el archivo 📝
          </h1>
        </ion-item-divider>

        <form [formGroup]="form" (ngSubmit)="guardarTexto()">
          <ion-item>
            <ion-label position="floating">Texto</ion-label>
            <ion-textarea formControlName="texto"></ion-textarea>
          </ion-item>
          <ion-button expand="full" type="submit" [disabled]="form.invalid"
            >Guardar</ion-button
          >
          <ion-toast
            [isOpen]="!!mensaje"
            [message]="mensaje"
            duration="3000"
            icon="checkbox"
            color="success"
            animated
            translucent
          ></ion-toast>
        </form>
      </main>
    </ion-content>
  `,
})
export class Tab5Page {
  form: FormGroup;
  mensaje!: string;

  constructor(private fb: FormBuilder) {
    addIcons({ checkbox });
    this.form = this.fb.group({
      texto: ['', Validators.required],
    });
  }

  async guardarTexto() {
    if (this.form.valid) {
      const { texto } = this.form.value;
      try {
        await Filesystem.writeFile({
          path: 'texto_guardado.txt',
          data: texto,
          directory: Directory.Documents,
          encoding: Encoding.UTF8,
        });
        this.mensaje =
          '¡Texto guardado exitosamente en el dispositivo! Revise la carpeta de documentos.';
        this.form.reset();
      } catch (e) {
        this.mensaje = 'Error al guardar el texto: ' + e;
      } finally {
        setTimeout(() => {
          this.mensaje = '';
        }, 3000);
      }
    }
  }
}
