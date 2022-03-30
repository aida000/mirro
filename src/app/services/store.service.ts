import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  data: Array<object> = [
    {
      id: 1,
      img: '/assets/img/store1.png',
      cardTitle:' Mirro Preset Pack Vol. 01',
      text: 'The first volume is my go-to presets when shooting action sports. Just the right amount of contrast and highlights to make your photo (literally) pop!'
    },
    {
      id: 2,
      img: '/assets/img/store2.png',
      cardTitle: 'Mirro Preset Pack Vol. 02',
      text: "Vol. 02 is dedicated solely to landscape photography. Pay attention to your exposure while out there and these presets will make your photos look great.",
    },
    {
      id: 3,
      img: '/assets/img/store3.png',
      cardTitle: 'Mirro Preset Pack Vol. 03',
      text: "These are a collection of my most used wedding presets — use with caution as you'll end up loving wedding photography.",
    },
  ];

  getItems() {
    return this.data;
  }
}
