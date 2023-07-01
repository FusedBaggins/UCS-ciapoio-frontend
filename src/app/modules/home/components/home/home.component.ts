import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/utils/services/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private _router: Router,
    private _autenticacaoService: AutenticacaoService
  ) {
  }

  ngOnInit(): void {
    if(this._autenticacaoService.usuarioEstaAutenticado()){
      this._router.navigate(['entrevistas']);
    }
    else{
      this._router.navigate(['login']);
    }
  }
}
