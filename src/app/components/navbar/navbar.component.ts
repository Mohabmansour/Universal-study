import { LangService } from './../../../assets/services/lang.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  bindingCheck: boolean = true;
  options: AnimationOptions = {
    path: '../../../assets/images/Hero Section Image.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  langIcon: string = '../../../assets/images/UK.svg';
  showDropMenue: boolean = false;
  langarray: any[] = [
    {
      icon: '../../../assets/images/UK.svg',
      name: 'English',
      id: 1,
    },
    {
      icon: '../../../assets/images/ar-icon.svg',
      name: 'اللغة العربية',
      id: 2,
    },
  ];
  constructor(
    private translate: TranslateService,
    private _LangService: LangService
  ) {}
  navbarRouting(path: string) {
    this._LangService.scrollToTop(path);
  }
  toggleLang(e: any) {
    if (e.target.id == 1) {
      this.langIcon = '../../../assets/images/UK.svg';
      this._LangService.changeLang('en', 'ltr');
      this.bindingCheck = true;
      // console.log(this._LangService.direction.getValue());
    } else {
      this.langIcon = '../../../assets/images/ar-icon.svg';
      this._LangService.changeLang('ar', 'rtl');
      this.bindingCheck = false;
      // console.log(this._LangService.direction.getValue());
    }
  }
}
