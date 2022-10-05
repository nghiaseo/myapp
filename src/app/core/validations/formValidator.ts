import { AbstractControl, ValidationErrors } from "@angular/forms";
export function passwordConfirmed(control: AbstractControl): ValidationErrors | null {
  const val = Object.keys(control.value).map((key) =>control.value[key])
  if (val.length == 2)
    return val[0] !== val[1] ? { 'passwordConfirmed': true } : null
  else return { 'passwordConfirmed': true }
}
