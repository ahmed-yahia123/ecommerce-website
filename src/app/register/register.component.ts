import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from '../auth-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private _AuthApiService: AuthApiService,
    private _Router: Router
  ) {}
  isLoading: boolean = false;
  errMsg!: string;
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(13),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/
        ),
      ]),
      rePassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/
        ),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(01)[0125][0-9]{8}$/),
      ]),
    },
    this.matchedPass
  );
  matchedPass(rForm: any) {
    if (rForm.get('password')?.value === rForm.get('rePassword')?.value) {
      return null;
    } else {
      return { 'matchedPass': true };
    }
  }
  register(formData: FormGroup) {
    this.isLoading = true;
    this._AuthApiService.signUpData(formData.value).subscribe({
      next: (data) => {
        data.message == 'success' ? this._Router.navigate(['/logIn']) : '';
        this.isLoading = false;
      },
      error: (err) => {
        this.errMsg = err.error.message;
        this.isLoading = false;
      },
    });
  }
}
