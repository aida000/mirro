import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,ParamMap} from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-uniquecard',
  templateUrl: './uniquecard.component.html',
  styleUrls: ['./uniquecard.component.scss']
})
export class UniquecardComponent implements OnInit {

  arr:any=[];
  constructor(private route:ActivatedRoute,private cardData:DataService) { }
  id:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.arr =this.cardData.getCardItem()
  }
  
}
