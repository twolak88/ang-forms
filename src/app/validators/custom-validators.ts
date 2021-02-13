import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static readonly NotAllowedName = 'Test';
  static readonly NotAllowedNameAsync = 'Testproject';

  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (CustomValidators.NotAllowedName === control.value) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  static invalidProjectNameAsync(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (CustomValidators.NotAllowedNameAsync === control.value) {
          resolve({ nameIsForbidden: true });
        }
        resolve(null);
      }, 2000);
    });
    return promise;
  }
}
