import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Observable, Subject, of, switchMap, takeUntil } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';

import { CiapService } from '../../services/ciap.service';
import httpErrorMessages from 'src/app/utils/constants/http-error-messages';
import { Instituicao } from 'src/app/utils/components/instituicao/models/instituicao';

@Component({
  selector: 'app-detalhe-ciap',
  templateUrl: './detalhe-ciap.component.html',
  styleUrls: ['./detalhe-ciap.component.scss']
})
export class DetalheCiapComponent implements OnInit {

  private _destroyed$: Subject<void>;

  instituicao$!: Observable<Instituicao | null>;

  constructor(
    private _router: Router,
    private _matSnackBar: MatSnackBar,
    private _ciapService: CiapService,
    private _activatedRoute: ActivatedRoute,
  ) {
    this._destroyed$ = new Subject();
  }

  ngOnInit(): void {
    this.instituicao$ = this._activatedRoute.params.pipe(
      takeUntil(this._destroyed$),
      switchMap((params: Params) => {
        if (params['id'])
          return this._ciapService.getInstituicao(params['id']);
        return of(null);
      })
    )

  }

  onAtualizarInstituicao(instituicao: Instituicao): void {
    console.log(instituicao);
    this._ciapService.postInstituicao(instituicao).subscribe({
      next: (res) => {
        this._matSnackBar.open(`CIAP ${res?.id} cadastrada! :)`, "OK", { duration: 2000 });
        this._router.navigate([res.id]);
      },
      error: (error: HttpErrorResponse) => {
        this._matSnackBar.open(httpErrorMessages[`${error.status}`], 'OK');
      }
    });
  }
}
