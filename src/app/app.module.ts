import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
