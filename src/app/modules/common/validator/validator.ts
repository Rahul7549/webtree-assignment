import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function titleValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const title = control.value as string;

    if (!title) {
      return { 'required': true }; 
    }

    
    if (title.length < 5) {
      return { 'minlength': { requiredLength: 5, actualLength: title.length } };
    }

    return null; 
  };
}


export function descriptionValidator(minLength: number, maxLength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const description = control.value as string; // Assuming the description is a string

    if (!description) {
      return { 'required': true }; 
    }

    if (description.length < minLength) {
      return { 'minlength': { requiredLength: minLength, actualLength: description.length } };
    }

    if (description.length > maxLength) {
      return { 'maxlength': { requiredLength: maxLength, actualLength: description.length } };
    }

    return null; 
  };

  
}

export function dateNotBeforeTodayValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const selectedDate = control.value as Date; // Assuming the control value is a Date object

    if (!selectedDate) {
      return null; // If no date selected, no validation error
    }

    const today = new Date(); // Get current date

    if (selectedDate < today) {
      return { 'dateBeforeToday': true }; // Validation fails if selected date is before today
    }

    return null; // Return null if the validation passes
  };
}