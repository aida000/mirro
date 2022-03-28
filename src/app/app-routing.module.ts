import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { UniquecardComponent } from './uniquecard/uniquecard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'cards',component:CardsComponent},
  {path:'card/:id',component:UniquecardComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
