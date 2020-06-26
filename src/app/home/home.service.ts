import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

enum Category {
    desktop = 'Desktop',
    nature = 'Nature',
    food = 'Food'
}

export interface Card {
    filename: String;
    name: String;
    category: Category;
}

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    private images: Card[] = [
        {
            filename: 'picture_01.jpg',
            name: 'Desktop Light',
            category: Category.desktop
        },
        {
            filename: 'picture_02.jpg',
            name: 'sea',
            category: Category.nature
        },
        {
            filename: 'picture_03.jpg',
            name: 'Desktop Dark',
            category: Category.desktop
        },
        {
            filename: 'picture_04.jpg',
            name: 'forest',
            category: Category.nature
        },
        {
            filename: 'picture_05.jpg',
            name: 'food',
            category: Category.food
        },
        {
            filename: 'picture_06.jpg',
            name: 'breakfast',
            category: Category.food
        }
    ];


    getAll(): Observable<Card[]> {
        return of(this.images)
    }

    getByCategory(category: Category): Observable<Card[]> {
        return of<Card[]>(this.images)
            .pipe(
                map(cards => cards.filter(card => card.category === category))
            )
    }

}