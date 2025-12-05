import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Aslam-fireworks');


  display:any[] =[


    {name: 'Mori Hanimoon Creakling shot',
      brand: 'Mori',
      price: '449',
      OldPrice: '550',
      img: 'Mori Honeymoon.jpg'
    },
  
    {name: 'Mori Color Koti Pots',
      brand: 'Mori',
      price: '399',
      OldPrice: '450',
      img: 'Mori Color Koti.jpg'
    },
  
    {name: 'Vanitha IQ Out Skyshot',
      brand: 'Vanitha',
      price: '999',
      OldPrice: '1450',
      img: 'iq-out.png'
    },
    {name: 'Mori Lagan Munch',
      brand: 'Mori',
      price: '1199',
      OldPrice: '1559',
      img: 'Mori lagan munch.jpg'
    },
    {name: 'Mori Silver Rain',
      brand: 'Mori',
      price: '189',
      OldPrice: '219',
      img: 'Mori silver rain.jpg'
    },
    {name: 'Mori Penta Plus Mini Skyshot',
      brand: 'Mori',
      price: '339',
      OldPrice: '449',
      img: 'Mori penta.jpg'
    },
    {name: 'Mori Mojto Creakling Pots',
      brand: 'Mori',
      price: '449',
      OldPrice: '699',
      img: 'mori-mojito-3-pcs.jpg'
    },
  ]
}
