import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.scss'],
})
export class ChooseUsComponent {
  options: AnimationOptions = {
    path: '../../../assets/images/Why Us Fixed.json',
  };
}
