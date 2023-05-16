import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Subject, takeUntil } from 'rxjs';

import { LoginService } from '../../services/login.service';
import { AutenticacaoService } from 'src/app/utils/services/autenticacao.service';
import httpErrorMessages from 'src/app/utils/constants/http-error-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;

  private _destoyed$: Subject<void>;

  constructor(
    private _router: Router,
    private _matSnackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _autenticacaoService: AutenticacaoService
  ) {

    this.form = this._formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    this._destoyed$ = new Subject();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._destoyed$.next();
    this._destoyed$.complete();
  }

  private _setUsuarioAutenticado(autenticado: boolean): void {
    this._autenticacaoService.setUsuarioAutenticado(autenticado);

    if (autenticado)
      this._router.navigate(['']);
  }

  public onSubmit(): void {
    if (this.form.valid) {
      this._loginService.login(this.form.value).pipe(
        takeUntil(this._destoyed$)
      ).subscribe({
        next: () => {
          this._setUsuarioAutenticado(true);
          this._router.navigate(['']);
        },
        error: (error: HttpErrorResponse) => {
          if (error?.status === 403) {
            this._setUsuarioAutenticado(true);
            return;
          }

          this._matSnackBar.open(httpErrorMessages[`${error.status}`], 'OK');
          this._setUsuarioAutenticado(false);
          this._destoyed$.next();
        }
      });
    }
  }
}
