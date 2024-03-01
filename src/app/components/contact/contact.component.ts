import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from 'src/assets/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private _ContactService:ContactService){

  }
  contactForm:FormGroup = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    phone:new FormControl(null),
    country:new FormControl(null),
    city:new FormControl(null),
    address:new FormControl(null),
    post_code:new FormControl(null),
    subject:new FormControl(null),
    inquery:new FormControl(null),
    contact:new FormControl('mobil')
  })
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

optionsValue(e:any)
{
  this.contactForm.controls['contact'].setValue(e.target.id)

  
}
  sendData(){
    console.log(this._ContactService.sendContactDataHome(this.contactForm.value).subscribe((res)=>{
      console.log(res);
    }));
    
  }
}
