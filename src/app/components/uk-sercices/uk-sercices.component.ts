import { Component } from '@angular/core';
import { LangService } from 'src/assets/services/lang.service';

@Component({
  selector: 'app-uk-sercices',
  templateUrl: './uk-sercices.component.html',
  styleUrls: ['./uk-sercices.component.scss'],
})
export class UkSercicesComponent {
  constructor(private _LangService: LangService) {}

  servicesRouting(path: string) {
    this._LangService.scrollToTop(path);
  }
}
