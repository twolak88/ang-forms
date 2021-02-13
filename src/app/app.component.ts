import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './validators/custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  readonly defaultStatus = 'Stable';

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.invalidProjectNameAsync
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(this.defaultStatus),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
