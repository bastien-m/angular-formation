import { Component, Input } from '@angular/core';
import { Card } from '../home.service';

@Component({
  selector: 'cap-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  imagePath = '';
  @Input() card: Card;

  constructor() { }

  getImagePath(): string {
    console.log(`assets/${this.card.filename}`)
    return `assets/${this.card.filename}`;
  }

}
