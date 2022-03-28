import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AboutCardService {
  constructor() {}

  data: Array<object> = [
    {
      id: 1,
      icon: 'favorite_border',
      cardTitle: 'Wedding Photography',
      text: "Wedding photography is often called the bread and butter of photographers — but that doesn't mean it has to be boring. Quite the opposite!",
    },
    {
      id: 2,
      icon: 'directions_boat',
      cardTitle: 'Sports Photography',
      text: "Sports photography is awesome. Sitting on the sidelines with a massive telephoto allows me to get right into the action — I love shooting sports where there's a lot of explosive movement.",
    },
    {
      id: 3,
      icon: 'groups',
      cardTitle: 'Portrait Photography',
      text: "Who doesn't love portrait photography? I love being able to capture that expression, quirk, smile or whatever, that sort of defines a person.",
    },
    {
      id: 4,
      icon: 'house',
      cardTitle: 'Architecture Photography',
      text: "The nice thing about shooting architecture (in my opinion) is that it's so easy to do. Seriously, just pick up your camera and get out there.",
    },
    {
      id: 5,
      icon: 'pets',
      cardTitle: 'Animal Photography',
      text: "Whenever I'm travelling I always make sure to pack gear that allows me to capture the local wildlife. The eagle that takes flight in this picture is probably my most prized image.",
    },
    {
      id: 6,
      icon: 'soup_kitchen',
      cardTitle: 'Food Photography',
      text: "Who doesn't love portrait photography? I love being able to capture that expression, quirk, smile or whatever, that sort of defines a person.",
    },
    {
      id: 7,
      icon: 'park',
      cardTitle: 'Nature Photography',
      text: "Landscape photography just never gets old. Someone told me that those are the kinds of pictures you never look. Well, I don't agree.",
    },
  ];

  getItems() {
    return this.data;
  }
}
