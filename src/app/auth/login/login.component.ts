import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  hide = true;
  loading: boolean;
  stateSubs: Subscription = new Subscription();

  constructor(private fb: FormBuilder,
    private _router: Router,
    private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      email: ['hiworld@gmail.com', Validators.required],
      password: ['123Qwerty', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onLogged() {
    if (this.form.status === "VALID" && this.form.get('email')!.value === 'hiworld@gmail.com' && this.form.get('password').value === '123Qwerty') {
      console.log('entro');
      setTimeout(() => {
        this._router.navigate(['dashboard']);
      }, 2000);
    }else{
      setTimeout(() => {
        this.openSnackBar('Input data error');
      }, 1500);
    }
  }





  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2500,
    });
  }

}
