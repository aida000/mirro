import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  data: Array<object> = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1606087492572-424ebe0f2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      cardTitle: 'Card Title',
      text: 'Some text',
      descrip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem ipsum, viverra non gravida a.',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
      cardTitle: 'Card Title',
      text: 'Some text',
      descrip:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem ipsum, viverra non gravida a.',
    },
  ];

  getItems() {
    return this.data;
  }

  cardData: Array<object> = [
    {
      id: 1,
      name: 'Home in Merrick Way',
      text: 'Enchantine three bedroom, three bath home with spacious oe bedroom, one bath...',
      price: '$300,000',
    },
    {
      id: 2,
      name: 'Villa In Alexandria',
      text: 'enjoy serenity of Deering Bay whole day from this spectacular North and..',
      price: '$825,000',
    },
    {
      id: 3,
      name: 'Villa On Cairo',
      text: 'The vary best waterfront location in Tahrir square and beside many cool places',
      price: '$540,000',
    },
    {
      id: 4,
      name: 'Home In Merrick Way',
      text: 'Enchantine three bedroom, three bath home with spacious oe bedroom, one bath...',
      price: '$620,000',
    },
    {
      id: 5,
      name: 'Villa In Alexandria',
      text: 'Enchantine three bedroom, three bath home with spacious oe bedroom, one bath...',
      price: '$365,000',
    },
    {
      id: 6,
      name: 'Home In Merrick Way',
      text: 'Enchantine three bedroom, three bath home with spacious oe bedroom, one bath...',
      price: '$540,000',
    },
  ];

  getCardItem() {
    return this.cardData;
  }
}
