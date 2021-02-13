import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    // this.signupForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );
    // this.signupForm.get('userData').get('email').statusChanges.subscribe(
    //   (status) => console.log(status)
    // );
    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Tom',
    //     'email': 't@test.com'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });
    this.signupForm.patchValue({
      'userData': {
        'username': 'Tom'
      },
      'gender': 'male'
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({
      'userData': {
        'username': 'Tom'
      },
      'gender': 'male'
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.includes(control.value)) {
      return {'nameIsForbidden': true};
    }
    return null;//null if control is valid
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>  {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({'emailIsForbidden': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }
}
