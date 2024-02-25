import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LangService } from 'src/assets/services/lang.service';

@Component({
  selector: 'app-get-application',
  templateUrl: './get-application.component.html',
  styleUrls: ['./get-application.component.scss'],
})
export class GetApplicationComponent {
  constructor(public _LangService: LangService , @Inject(DOCUMENT) private document: Document) {}
  Basic_Info: boolean = true;
  want_to_apply: boolean = false;
  Language_Course: boolean = false;
  trasferWayes: boolean = false;
  applyNextValue:any;
  IELTSScores: boolean = false;
  IELTSNo: boolean = false;
  Bachelor_Degree: boolean = false;
  Foundation_Course: boolean = false;
  Master_Degree: boolean = false;
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  Routing(path: string) {
    this._LangService.scrollToTop(path);
  }
  airportTransfaer(e: any) {
    if (e.target.id == 1) {
      this.trasferWayes = true;
    } else {
      this.trasferWayes = false;
    }
    console.log(e.target.id);
  }
  scrollToTop() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }
  applyOptions(e: any) {
    console.log(e.target.innerText);
    this.applyNextValue = e.target.innerText


  }
  applyNext(){
    this.scrollToTop()
    console.log(this.applyNextValue);
    if (this.applyNextValue =='Language Course' || this.applyNextValue == 'دورة لغة') {
      this.want_to_apply = false; 
      this.Language_Course = true;
      this.Bachelor_Degree = false;
      this.Foundation_Course = false;
      this.Master_Degree = false;
    } else if (this.applyNextValue =='Foundation Course' || this.applyNextValue =='الدورة التأسيسية') {
      this.want_to_apply = false; 
      this.Language_Course = false;
      this.Bachelor_Degree = false;
      this.Foundation_Course = true;
      this.Master_Degree = false;
    } else if (this.applyNextValue =='Bachelor Degree' || this.applyNextValue =='درجة البكالوريوس') {
      this.want_to_apply = false; 
      this.Language_Course = false;
      this.Bachelor_Degree = true;
      this.Foundation_Course = false;
      this.Master_Degree = false;
    } else  if (this.applyNextValue =='Master Degree' || this.applyNextValue =='درجة الماجستير') {
      this.want_to_apply = false; 
      this.Language_Course = false;
      this.Bachelor_Degree = false;
      this.Foundation_Course = false;
      this.Master_Degree = true;
    }
  }
  IELTSCertifcate(e: any) {
    if (e.target.id == 1) {
      this.IELTSScores = true;
      this.IELTSNo = false;
    } else {
      this.IELTSNo = true;
      this.IELTSScores = false;
    }
    console.log(e.target.id);
  }
  Basic_Info_next(){
    this.scrollToTop()
    this.Basic_Info = false ;
    this.want_to_apply = true ;
  }
want_to_apply_back(){
  this.scrollToTop()
this.want_to_apply = false ;
this.Basic_Info = true ;
}
  optionsBack(){
    this.scrollToTop()
    this.want_to_apply = true ;
    this.Foundation_Course = false ;
    this.Language_Course = false ;
    this.Bachelor_Degree = false ;
    this.Master_Degree = false ;
  }
}
