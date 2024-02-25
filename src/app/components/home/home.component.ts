import { Component } from '@angular/core';
import { LangService } from 'src/assets/services/lang.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public _LangService: LangService) {}
}
