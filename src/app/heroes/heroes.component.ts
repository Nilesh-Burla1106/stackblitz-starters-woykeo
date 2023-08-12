import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';

@Component({
  standalone:true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports:[HeroComponent]
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}