import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  RegisterForm: FormGroup;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.RegisterForm = this.fb.group({
      fullName: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
    })

    this.loginForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(RegisterForm: FormGroup) {
    this.authService.createUser(RegisterForm.value.email, RegisterForm.value.password).then(data => {
      console.log(data);
      alert("Registration successfull");
    }).catch(error => {
      alert(error);
    })
  }

  onSubmitOfLogin(loginForm: FormGroup) {
    this.authService.signIn(loginForm.value.email, loginForm.value.password).then(data => {
      console.log(data);
      alert("Login successfull");
    }).catch(error => {
      alert(error);
    })
  }
}
