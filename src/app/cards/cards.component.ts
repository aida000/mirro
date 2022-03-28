import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  arr :any = []

  constructor(private cardData:DataService,private route: ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
   this.arr =this.cardData.getCardItem()
   console.log(this.arr);
   
  }
  see(id:number){
  this.router.navigate(['card/',id])
    
  }

}
