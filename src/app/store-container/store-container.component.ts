import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store-container',
  templateUrl: './store-container.component.html',
  styleUrls: ['./store-container.component.scss']
})
export class StoreContainerComponent implements OnInit {
  arr:any=[];
  title='Preset store'
  constructor(private data:StoreService) { }

  ngOnInit(): void {
    this.arr=this.data.getItems()
  }
}
