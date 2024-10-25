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
    ReactiveFormsModule,
  ],
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Calcular Ecuación Cuadratica </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <main class="grid place-content-center m-4 space-y-4">
        <h1 class="text-xl text-center font-bold">
          Coeficientes de la Ecuación
        </h1>
        <small class="text-center"
          >Forma de la Ecuación cuadrática ax²+bx+c</small
        >

        <form
          [formGroup]="form"
          (ngSubmit)="onSubmit()"
          class="flex flex-col gap-4"
        >
          <div class="flex justify-center gap-4">
            <div>
              <input
                class="border-white border-2 p-1.5 rounded-lg w-20 mr-2 text-center"
                type="number"
                placeholder="a"
                formControlName="a"
              />
              <span>x²</span>
            </div>
            <div>
              <input
                class="border-white border-2 p-1.5 rounded-lg w-20 mr-2 text-center"
                type="number"
                placeholder="b"
                formControlName="b"
              />
              <span>x</span>
            </div>
            <input
              class="border-white border-2 p-1.5 rounded-lg w-20 mr-2 text-center"
              type="number"
              placeholder="c"
              formControlName="c"
            />
          </div>
          <ion-button expand="full" type="submit" [disabled]="form.invalid"
            >Calcular</ion-button
          >
        </form>
        @if (resultado) {
        <h2 class="text-center">Resultados:</h2>
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

      console.log(a, b, c);

      const discriminante = b * b - 4 * a * c;
      if (discriminante > 0) {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        this.resultado = `x₁ = ${x1}, x₂ = ${x2}`;
      } else if (discriminante === 0) {
        const x = -b / (2 * a);
        this.resultado = `x = ${x}`;
      } else {
        this.resultado = 'No hay soluciones reales';
      }
    }
  }
}
