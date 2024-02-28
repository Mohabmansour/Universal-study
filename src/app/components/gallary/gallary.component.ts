import { Component } from '@angular/core';
import { LangService } from 'src/assets/services/lang.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss'],
})
export class GallaryComponent {
  constructor(public _LangService:LangService){

  }
  p: number = 1;
  gallary: string[] = [
    '../../../assets/images/gallary/Property 1=1.png',
    '../../../assets/images/gallary/Property 1=2.png',
    '../../../assets/images/gallary/Property 1=3.png',
    '../../../assets/images/gallary/Property 1=4.png',
    '../../../assets/images/gallary/Property 1=5.png',
    '../../../assets/images/gallary/Property 1=6.png',
    '../../../assets/images/gallary/Property 1=7.png',
    '../../../assets/images/gallary/Property 1=8.png',
    '../../../assets/images/gallary/Property 1=9.png',
    '../../../assets/images/gallary/Property 1=10.png',
    '../../../assets/images/gallary/Property 1=11.png',
    '../../../assets/images/gallary/Property 1=12.png',
    '../../../assets/images/gallary/Property 1=13.png',
    '../../../assets/images/gallary/Property 1=14.png',
    '../../../assets/images/gallary/Property 1=15.png',
    '../../../assets/images/gallary/Property 1=16.png',
    '../../../assets/images/gallary/Property 1=17.png',
    '../../../assets/images/gallary/Property 1=18.png',
    '../../../assets/images/gallary/Property 1=19.png',
    '../../../assets/images/gallary/Property 1=20.png',
    '../../../assets/images/gallary/Property 1=21.png',
    '../../../assets/images/gallary/Property 1=22.png',
    '../../../assets/images/gallary/Property 1=23.png',
    '../../../assets/images/gallary/Property 1=24.png',
    '../../../assets/images/gallary/Property 1=25.png',
    '../../../assets/images/gallary/Property 1=26.png',
    '../../../assets/images/gallary/Property 1=27.png',
    '../../../assets/images/gallary/Property 1=28.png',
    '../../../assets/images/gallary/Property 1=29.png',
    '../../../assets/images/gallary/Property 1=30.png',
    '../../../assets/images/gallary/Property 1=31.png',
    '../../../assets/images/gallary/Property 1=32.png',
    '../../../assets/images/gallary/Property 1=33.png',
    '../../../assets/images/gallary/Property 1=34.png',
    '../../../assets/images/gallary/Property 1=35.png',
    '../../../assets/images/gallary/Property 1=36.png',
    '../../../assets/images/gallary/Property 1=37.png',
    '../../../assets/images/gallary/Property 1=38.png',
    '../../../assets/images/gallary/Property 1=39.png',
    '../../../assets/images/gallary/Property 1=40.png',
    '../../../assets/images/gallary/Property 1=41.png',
    '../../../assets/images/gallary/Property 1=42.png',
    '../../../assets/images/gallary/Property 1=43.png',
    '../../../assets/images/gallary/Property 1=44.png',
    '../../../assets/images/gallary/Property 1=45.png',
    '../../../assets/images/gallary/Property 1=46.png',
    '../../../assets/images/gallary/Property 1=47.png',
    '../../../assets/images/gallary/Property 1=48.png',
    '../../../assets/images/gallary/Property 1=49.png',
    '../../../assets/images/gallary/Property 1=50.png',
    '../../../assets/images/gallary/Property 1=51.png',
    '../../../assets/images/gallary/Property 1=52.png',
    '../../../assets/images/gallary/Property 1=53.png',
    '../../../assets/images/gallary/Property 1=54.png',
    '../../../assets/images/gallary/Property 1=55.png',
    '../../../assets/images/gallary/Property 1=56.png',
    '../../../assets/images/gallary/Property 1=57.png',
    '../../../assets/images/gallary/Property 1=58.png',
    '../../../assets/images/gallary/Property 1=59.png',
    '../../../assets/images/gallary/Property 1=60.png',
    '../../../assets/images/gallary/Property 1=61.png',
    '../../../assets/images/gallary/Property 1=62.png',
    '../../../assets/images/gallary/Property 1=63.png',
    '../../../assets/images/gallary/Property 1=64.png',
    '../../../assets/images/gallary/Property 1=65.png',
    '../../../assets/images/gallary/Property 1=66.png',
    '../../../assets/images/gallary/Property 1=67.png',
    '../../../assets/images/gallary/Property 1=68.png',
    '../../../assets/images/gallary/Property 1=69.png',
    '../../../assets/images/gallary/Property 1=70.png',
    '../../../assets/images/gallary/Property 1=71.png',
    '../../../assets/images/gallary/Property 1=72.png',
    '../../../assets/images/gallary/Property 1=73.png',
    '../../../assets/images/gallary/Property 1=74.png',
    '../../../assets/images/gallary/Property 1=75.png',
    '../../../assets/images/gallary/Property 1=76.png',
  ];

  text() {
    for (let i = 0; i < this.gallary.length; i++) {
      console.log(this.gallary[i]);
    }
  }
}
