import { LangService } from 'src/assets/services/lang.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  constructor(public _LangService:LangService){

  }

}
