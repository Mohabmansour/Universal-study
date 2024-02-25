import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
import { LangService } from 'src/assets/services/lang.service';

@Component({
  selector: 'app-welfare-support',
  templateUrl: './welfare-support.component.html',
  styleUrls: ['./welfare-support.component.scss'],
})
export class WelfareSupportComponent {
  options: AnimationOptions = {
    path: '../../../assets/images/Number 1.json',
  };
  options2: AnimationOptions = {
    path: '../../../assets/images/Number 2.json',
  };
  options3: AnimationOptions = {
    path: '../../../assets/images/Number 3.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  constructor(public _LangService: LangService) {}
}
