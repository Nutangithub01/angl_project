import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  registerForm : FormGroup;
  issubmitted = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[A-Z][a-z]')]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    })
  }


  ngOnInit(): void {
    
  }

  onFormSubmit(registerForm: FormGroup) {
    this.issubmitted = true;
    console.log("valid ="+ registerForm.valid);
    console.log(registerForm.value.firstName);
    console.log(registerForm.value.lastName);
    console.log(registerForm.value.email);
    console.log(registerForm.value.password);
    console.log(registerForm.value.contact);
  }
}
