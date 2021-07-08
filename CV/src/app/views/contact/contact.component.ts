import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

 constructor(private fb: FormBuilder) {}

 
 regForm = this.fb.group({
   name: ['', [Validators.required, Validators.minLength(2)]],
   email: ['', [Validators.required, Validators.email]],
   object: ['', [Validators.required, Validators.minLength(2)]],
   message: ['', [Validators.required, Validators.minLength(2)]]
  })


  
  onSub() {
    console.log(this.regForm);
  }
}

