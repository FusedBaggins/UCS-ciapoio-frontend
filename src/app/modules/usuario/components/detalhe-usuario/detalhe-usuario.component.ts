import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Observable, Subject, map, of, startWith, switchMap, takeUntil } from 'rxjs';

import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import httpErrorMessages from 'src/app/utils/constants/http-error-messages';


@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.scss']
})
export class DetalheUsuarioComponent implements OnInit {

  @ViewChild('filtroInput') filtroInput!: ElementRef<HTMLInputElement>;

  perfis!: any[];
  form: FormGroup;

  perfisFiltrados$!: Observable<any[]>;
  private _destroyed$!: Subject<void>;

  constructor(
    private _router: Router,
    private _matSnackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _usuarioService: UsuarioService,
  ) {
    this.form = this._formBuilder.group({
      id: [null, []],
      nome: [null, [Validators.required]],
      tipo: ['2', [Validators.required]],
      usuario: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      confirmacao_senha: [null, [Validators.required]],
      ativo: [true, []],
      administrador: [false, []],
      data_inativacao: [null, []],
      perfis: [[], []],
      perfilFiltro: [null, []],
      instituicao: [null, []]
    });

    this._destroyed$ = new Subject();
  }

  private _setChipsPerfis(): void {
    this.perfis = [
      { label: 'Usuário CIAP', value: 1 },
      { label: 'Usuário Entidade', value: 2 },
      { label: 'Administrador', value: 3 },
      { label: 'administrador', value: 5 },
    ];

  }

  private _filtrarPerfil(perfil: any): any[] {
    const value = perfil?.label?.toLowerCase() || perfil.toLowerCase();
    return this.perfis.filter((perfil: any) => perfil.label.toLowerCase().includes(value));
  }

  private _atualizarUsuario(usuario: Usuario): void {
    delete usuario.confirmacao_senha;
    this._usuarioService.postUsuario(usuario).subscribe({
      next: (res) => {
        const mensagem: string = (!this.form.get('id')?.value) ? 'cadastrado' : 'atualizado';
        this._matSnackBar.open(`Profissional ${res?.id} ${mensagem}! :)`, "OK", { duration: 2000 });
        if (!this.form.get('id')?.value) this._router.navigate(['profissional', res.id]);
      },
      error: (error: HttpErrorResponse) => {
        this._matSnackBar.open(httpErrorMessages[`${error.status}`], 'OK');
      }
    });
  }

  ngOnInit(): void {
    this._setChipsPerfis();

    this.perfisFiltrados$ = this.form.controls['perfilFiltro']?.valueChanges.pipe(
      startWith(null),
      map((perfil: string) => {
        return (perfil ? this._filtrarPerfil(perfil) : this.perfis.slice());
      })
    );

    this._activatedRoute.params.pipe(
      takeUntil(this._destroyed$),
      switchMap((params: Params) => {
        if (params['id'])
          return this._usuarioService.getUsuario(params['id']);
        return of(null);
      })
    ).subscribe({
      next: (usuario: Usuario | null) => {
        if (usuario) {
          this.form.patchValue(usuario);
          return;
        }
      }, error: (error: HttpErrorResponse) => {
        if (error.status === 404) this._router.navigate(['profissional', 'incluir']);
      }
    });
  }

  onAdicionar(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    event.chipInput!.clear();
  }

  onSelecionarOpcao(event: MatAutocompleteSelectedEvent): void {
    if (this.form.get('perfis')?.value?.findIndex((perfil: any) => perfil?.value === event.option.value.value) === -1) {
      this.form.get('perfis')?.patchValue([...this.form.get('perfis')?.value, ...[event.option.value]]);
      return;
    } else {
      this._matSnackBar.open("O usuário já possui esse perfil!", "OK");
    }

    setTimeout(() => {
      this.form.get('perfilFiltro')?.setValue('');
      this.filtroInput.nativeElement.value = '';
      event.option.deselect();
    });
  }

  onAtualizarPrestadorSelecionado(valor: any) {
    this.form.get('instituicao')?.patchValue(valor);
  }

  onSubmit(): void {
    try {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        throw new Error('Campos obrigatórios devem ser preenchidos!');
      }

      const senha: string = this.form.get('senha')?.value;
      const confirmacao_senha: string = this.form.get('confirmacao_senha')?.value;
      if (senha !== confirmacao_senha) throw new Error('As senhas devem ser iguais!');

      this._atualizarUsuario(this.form.getRawValue());

    }
    catch (e: any) {
      this._matSnackBar.open(e.message, 'OK', { duration: 2000 });
    }

  }

}
