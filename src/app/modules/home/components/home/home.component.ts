import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/modules/usuario/services/usuario.service';
import Perfil from 'src/app/utils/enums/perfil';
import { AutenticacaoService } from 'src/app/utils/services/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  usuarioLogado$!: Observable<any>;
  tipoUsuario = Perfil;

  constructor(
    private _router: Router,
    private _autenticacaoService: AutenticacaoService,
    private _usuarioService: UsuarioService
  ) {
  }

  ngOnInit(): void {
    if (this._autenticacaoService.usuarioEstaAutenticado()) {
      this._router.navigate(['']);
    }
    else {
      this._router.navigate(['login']);
    }

    this.usuarioLogado$ = this._usuarioService.getUsuarioLogado();
  }

  onTrocarRota(rota: string): void {
    this._router.navigate([rota]);
  }
}
