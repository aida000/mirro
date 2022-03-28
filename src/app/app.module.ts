import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from './cards/cards.component';
import { UniquecardComponent } from './uniquecard/uniquecard.component';
import { HomeComponent } from './home/home.component';
import { ContainerAboutComponent } from './container-about/container-about.component';
import { AboutCardComponent } from './about-card/about-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    CardsComponent,
    UniquecardComponent,
    HomeComponent,
    ContainerAboutComponent,
    AboutCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
