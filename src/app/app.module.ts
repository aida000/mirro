import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from './cards/cards.component';
import { UniquecardComponent } from './uniquecard/uniquecard.component';
import { HomeComponent } from './home/home.component';
import { ContainerAboutComponent } from './container-about/container-about.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { StoreContainerComponent } from './store-container/store-container.component';
import { FooterComponent } from './footer/footer.component';
import { FooterSearchComponent } from './footer-search/footer-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    CardsComponent,
    UniquecardComponent,
    HomeComponent,
    ContainerAboutComponent,
    AboutCardComponent,
    StoreContainerComponent,
    FooterComponent,
    FooterSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
