import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  arr: Array<any> = [];
  constructor(private data: DataService, private router: Router) {}
  ngOnInit(): void {
    this.arr = this.data.getItems();
  }
  click(id: number) {
    if (id == 1) {
      this.router.navigate(['/cards']);
    } else {
      this.router.navigate(['/about']);
    }
  }
}
