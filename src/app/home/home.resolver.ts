import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Card, HomeService } from './home.service';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HomeResolver implements Resolve<Card[]> {

    constructor(private homeService: HomeService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Card[]> {
        console.log('resolver called')
        return this.homeService.getAll()
            .pipe(delay(2000)) // ajouter du delai pour afficher le spinner
    }

}