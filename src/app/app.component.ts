import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HEROES } from './mock-heroes';

@Component({
  standalone:true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[HeroesComponent,HeroDetailsComponent],
})
export class AppComponent implements OnInit {
  heroes: Hero[] = HEROES;
  constructor() {
    // console.log(this.heroes)
   }
    
  ngOnInit() {
    // this.heroes=HEROES;
  }
  onHeroselected(hero:Hero){
  console.log(event);
  }

}