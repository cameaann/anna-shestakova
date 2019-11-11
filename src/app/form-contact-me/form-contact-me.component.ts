import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact-me',
  templateUrl: './form-contact-me.component.html',
  styleUrls: ['./form-contact-me.component.scss']
})
export class FormContactMeComponent implements OnInit {

  contactForm = new FormGroup({
    email: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    message: new FormControl("", Validators.maxLength(200))
  });


  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    window.open('mailto:cameaann@gmail.com?subject=subject&body=body');
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

}
