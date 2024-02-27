import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { LangService } from 'src/assets/services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private _LangService:LangService){

  }
  options: AnimationOptions = {
    path: '../../../assets/images/Hero Section Image.json',
  };
routing(path:string)
{
  this._LangService.scrollToTop(path)
}
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
