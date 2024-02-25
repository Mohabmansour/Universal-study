import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private directionSubject = new BehaviorSubject<any>('ltr');
  direction$ = this.directionSubject.asObservable();
  constructor(private translate: TranslateService, private _router: Router) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  changeLang(lang: string, dir: string) {
    this.translate.use(lang);
    if (lang == 'en') {
      this.directionSubject.next(dir);
    } else {
      this.directionSubject.next(dir);
    }

    // this.localEvent.next(lang)
  }

  scrollToTop(path: string): void {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Navigate to the specified route
    this._router.navigate([`/${path}`]);
  }
}
