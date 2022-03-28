import { Component, OnInit } from '@angular/core';
import { AboutCardService } from '../services/about-card.service';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent implements OnInit {
  arr:any=[];
  constructor(private data:AboutCardService) { }

  ngOnInit(): void {
    this.arr=this.data.getItems()
  }

}
