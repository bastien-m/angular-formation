import { Component, OnInit } from '@angular/core';
import { HomeService, Card } from '../home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: Card[] = [];

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    console.log('get data')
    // recuperation des data recuperees par le resolver
    this.cards = this.route.snapshot.data['cards'];
  }

}
