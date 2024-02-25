import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/assets/services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  direction: string | null = '';
  constructor(public _LangService: LangService, private router: Router) {}
  langIcon: string = '../../../assets/images/UK.svg';
  toggleLang(e: any) {
    if (e.target.id == 1) {
      this.langIcon = '../../../assets/images/UK.svg';
      this._LangService.changeLang('en', 'ltr');
      console.log(this.direction);
      // this.direction = this._LangService.direction.getValue();
      // console.log(this.direction);

      // console.log(this._LangService.direction.getValue());
    } else {
      this.langIcon = '../../../assets/images/ar-icon.svg';
      this._LangService.changeLang('ar', 'rtl');
      // this.direction = this._LangService.direction.getValue();
      console.log(this.direction);
    }
  }
  title = 'my-app';
}
