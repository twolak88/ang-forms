import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formEl', {static: false}) signupForm: NgForm;
  defaultSubscription = 'Advanced';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  authData = {
    email: '',
    subscription: '',
    password: ''
  }
  submitted = false;

  onSubmit() {
    console.log(this.signupForm.value);
    this.submitted = true;
    this.authData.email = this.signupForm.value.email;
    this.authData.subscription = this.signupForm.value.subscription;
    this.authData.password = this.signupForm.value.password;
  }
}
