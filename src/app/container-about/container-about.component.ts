import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-container-about',
  templateUrl: './container-about.component.html',
  styleUrls: ['./container-about.component.scss']
})
export class ContainerAboutComponent implements OnInit {

  constructor() { }

  @Input() public item: any;
  ngOnInit(): void {
    console.log(this.item)
    
  }

}
