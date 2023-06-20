import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime, startWith, switchMap } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { ListaEntidadeConfiguracao } from 'src/app/utils/components/lista-entidade/models/lista-entidade-configuracao';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  public filtros!: FormGroup;
  public usuarios$!: Observable<Usuario[]>;

  public entidadeConfig: ListaEntidadeConfiguracao = {
    exibirAvatar: true,
    exibirCarregamento: true,
    exibirIdentificador: false,
    exibirEdicao:true,
  }

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _usuarioService: UsuarioService
  ) {
    this.filtros = this._formBuilder.group({
      id: [null, []],
      nome: [null, []]
    });
  }

  ngOnInit(): void {
    this.usuarios$ = this.filtros.valueChanges.pipe(
      startWith({}),
      debounceTime(500),
      switchMap((filtros: any) => {
        return this._usuarioService.getUsuarios(filtros);
      })
    );
  }

  onAdicionarNovoUsuario(): void {
    this._router.navigate(['profissional','incluir'])
  }
}
