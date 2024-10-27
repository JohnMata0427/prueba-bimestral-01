import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonItemDivider,
} from '@ionic/angular/standalone';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonItemDivider,
    ReactiveFormsModule,
  ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Soluciones de Ecuación Cuadratica 🧠 </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <main class="grid place-content-center m-4 space-y-4">
        <ion-item-divider>
          <h1 class="text-xl font-bold text-center">
            Escriba los coeficientes de la ecuación 💡
          </h1>
        </ion-item-divider>

        <span class="text-center text-sm">
          Forma de la Ecuación Cuadrática ax²+bx+c = 0
        </span>

        <form
          [formGroup]="form"
          (ngSubmit)="onSubmit()"
          class="flex flex-col gap-4"
        >
          <div class="flex justify-center gap-4">
            <div class="flex items-center gap-2">
              <ion-input
                label="a"
                label-placement="floating"
                fill="outline"
                placeholder="a"
                class="w-20"
                type="number"
                formControlName="a"
              ></ion-input>
              <span>x²</span>
            </div>
            <div class="flex items-center gap-2">
              <ion-input
                label="b"
                label-placement="floating"
                fill="outline"
                placeholder="b"
                class="w-20"
                type="number"
                formControlName="b"
              ></ion-input>
              <span>x</span>
            </div>
            <ion-input
              label="c"
              label-placement="floating"
              fill="outline"
              placeholder="c"
              class="w-20"
              type="number"
              formControlName="c"
            ></ion-input>
          </div>
          <ion-button expand="full" type="submit" [disabled]="form.invalid"
            >Calcular</ion-button
          >
        </form>
        @if (resultado) {
        <h2 class="text-center text-xl font-bold">Resultados:</h2>
        <p class="text-center">{{ resultado }}</p>
        }
      </main>
    </ion-content>
  `,
})
export class Tab4Page {
  form: FormGroup;
  resultado: string | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      a: ['', Validators.required],
      b: ['', Validators.required],
      c: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { a, b, c } = this.form.value;
      const discriminante = b * b - 4 * a * c;

      console.log('Coeficientes:', a, b, c);
      console.log('Discriminante:', discriminante);

      if (discriminante > 0) {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        if (
          Number.isNaN(x1) ||
          Number.isNaN(x2) ||
          Math.abs(x1) === Infinity ||
          Math.abs(x2) === Infinity
        ) {
          this.resultado = 'No hay soluciones reales';
        } else {
          this.resultado = `x₁ = ${x1}, x₂ = ${x2}`;
        }
      } else if (discriminante === 0) {
        const x = -b / (2 * a);
        this.resultado = `x = ${x}`;
      } else {
        this.resultado = 'No hay soluciones reales';
      }
    }
  }
}
