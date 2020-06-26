import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'cap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Présentation Capgemini';
  isLoading = false;

  constructor(private router: Router) {
    // gestion du statut du loader selon l'etat du router
    router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.isLoading = true;
      } else if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError
      ) {
        this.isLoading = false;
      }
    })
  }

}
