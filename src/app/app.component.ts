import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("formEl") signupForm: NgForm;
  answer: string;
  defaultQuestion = 'pet';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   this.userDetails = form.value;
  //   console.log(this.userDetails)
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
