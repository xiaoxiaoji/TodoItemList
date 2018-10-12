import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';
import { from } from 'rxjs';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 
  heroes : Hero[];
  selectedHero: Hero;
 
 
  constructor(private heroservice : HeroService,private messageService:MessageService) { }
 
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void{
    //this.heroes=this.heroservice.getHeroes();
    this.heroservice.getHeroes().subscribe(heroes=>this.heroes=heroes)
  }
 
  onSelect(hero: Hero): void {
    this.messageService.add("Hero Service: "+hero.name+" selected.");
    this.selectedHero = hero;
  }
}