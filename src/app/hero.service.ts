import { Injectable } from '@angular/core';
import{Hero} from './hero'
import {HEROES} from './mock-heroes'
import { Observable,of, from } from 'rxjs';
import{ MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes():Observable<Hero[]>{
    this.messageService.add('Hero Service:Feched hero!');
    return of(HEROES);
  }
  constructor(private messageService:MessageService) { }
}
