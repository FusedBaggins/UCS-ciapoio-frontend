import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Subject, takeUntil, switchMap, of } from 'rxjs';

import { Vara } from 'src/app/utils/models/vara';
import { VaraService } from '../../services/vara.service';
import httpErrorMessages from 'src/app/utils/constants/http-error-messages';

@Component({
  selector: 'app-detalhes-vara',
  templateUrl: './detalhes-vara.component.html',
  styleUrls: ['./detalhes-vara.component.scss']
})
export class DetalhesVaraComponent {

  form!: FormGroup;
  private _destroyed$!: Subject<void>;

  constructor(
    private _router: Router,
    private _matSnackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _varaService: VaraService,
  ) {
    this.form = this._formBuilder.group({
      id: [null, []],
      nome: [null, [Validators.required]],
    });

    this._destroyed$ = new Subject();
  }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(
      takeUntil(this._destroyed$),
      switchMap((params: Params) => {
        if (params['id'])
          return this._varaService.getVara(params['id']);
        return of(null);
      })
    ).subscribe({
      next: (vara: Vara | null) => {
        if (vara) {
          this.form.patchValue(vara);
          return;
        }
      }, error: (error: HttpErrorResponse) => {
        if (error.status === 404) this._router.navigate(['vara-penal', 'incluir']);
      }
    });
  }

  private _atualizarVara(vara: Vara): void {
    this._varaService.postVara(vara).subscribe({
      next: (res) => {
        const mensagem: string = (!this.form.get('id')?.value) ? 'cadastrada' : 'atualizada';
        this._matSnackBar.open(`Vara penal ${res?.id} ${mensagem}! :)`, "OK", { duration: 2000 });
        if (!this.form.get('id')?.value) this._router.navigate(['vara-penal', res.id]);
      },
      error: (error: HttpErrorResponse) => {
        this._matSnackBar.open(httpErrorMessages[`${error.status}`], 'OK');
      }
    });
  }

  onSubmit(): void {
    try {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        throw new Error('Campos obrigatórios devem ser preenchidos!');
      }

      this._atualizarVara(this.form.getRawValue());

    }
    catch (e: any) {
      this._matSnackBar.open(e.message, 'OK', { duration: 2000 });
    }

  }

} 
