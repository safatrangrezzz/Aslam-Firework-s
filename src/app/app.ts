import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Aslam-fireworks');


temp= "ff"
  display:any[] =[


    {name: 'Mori Hanimoon 12 creakling shot',
      brand: 'Mori',
      price: '450',
      img: 'Mori Honeymoon.jpg'
    },
  
    {name: 'Mori Color Koti Pots',
      brand: 'Mori',
      price: '400',
      img: 'Mori Color koti.jpg'
    },
  
    {name: 'Vanitha IQ Out Skyshot',
      brand: 'Vanitha',
      price: '1300',
      img: 'iq-out.png'
    },
    {name: 'Mori Lagan Munch',
      brand: 'Mori',
      price: '1900',
      img: 'Mori lagan munch.jpg'
    },
    {name: 'Mori Silver Rain',
      brand: 'Mori',
      price: '1900',
      img: 'Mori silver rain.jpg'
    },
    {name: 'Mori Penta Plus Mini skyshot',
      brand: 'Mori',
      price: '1900',
      img: 'Mori penta.jpg'
    },
    {name: 'Mori Mojto Creakling Pots',
      brand: 'Mori',
      price: '1900',
      img: 'mori-mojito-3-pcs.jpg'
    },
  ]
}
