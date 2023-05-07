import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { ItemMenu } from '../../models/item-menu';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {

  @Input() index!: number;
  @Input() item!: ItemMenu;

  @Output() itemAtivo!: EventEmitter<number>;

  constructor(private _router: Router) {
    this.itemAtivo = new EventEmitter();
  }

  ngOnInit(): void { }

  onAcessarModulo(): void {
    this.item.ativo = true;
    this.itemAtivo.emit(this.index);
    const rota: string = this.item.url.replaceAll('\\', '').replaceAll('*', '');
    this._router.navigate([rota]);
  }
}
