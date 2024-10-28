import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
})
export class AppComponent {
  private theme = window.matchMedia('(prefers-color-scheme: dark)').matches
  constructor() {}
  ngOnInit() {
    console.log('Theme:', this.theme ? 'dark' : 'light')
  }
}
