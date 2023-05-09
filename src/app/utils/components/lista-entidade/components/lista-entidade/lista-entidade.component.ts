import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-lista-entidade',
  templateUrl: './lista-entidade.component.html',
  styleUrls: ['./lista-entidade.component.scss']
})
export class ListaEntidadeComponent {

  @Input() entidades!: any[];

  @ContentChild('entidades') entidadesTemplate!: TemplateRef<any>;

  constructor() { }
}
