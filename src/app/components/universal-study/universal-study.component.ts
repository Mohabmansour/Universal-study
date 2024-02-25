import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-universal-study',
  templateUrl: './universal-study.component.html',
  styleUrls: ['./universal-study.component.scss'],
})
export class UniversalStudyComponent {
  options: AnimationOptions = {
    path: '../../../assets/images/Number 1.json',
  };
  options2: AnimationOptions = {
    path: '../../../assets/images/Number 2.json',
  };
  options3: AnimationOptions = {
    path: '../../../assets/images/Number 3.json',
  };
  options4: AnimationOptions = {
    path: '../../../assets/images/Number 4.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
