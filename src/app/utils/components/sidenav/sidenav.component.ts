import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { Observable, map } from 'rxjs';
import { ItemMenu } from './models/item-menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public links = [{ link: '', titulo: 'teste', isActive: true }];
  public itensMenu$!: Observable<ItemMenu[]>;

  constructor(private _sidenavService: SidenavService) {

  }

  ngOnInit(): void {
    this.itensMenu$ = this._sidenavService.getMenu().pipe(
      map((items: ItemMenu[]) => {
        items?.forEach((item: ItemMenu) => item.ativo = false)
        return items.filter((item: ItemMenu) => item.visivel);
      })
    );
  }

  onItemAtivoClicado(index: number, itens: ItemMenu[]): void {
    itens.forEach((item: ItemMenu, i: number) => {
      if (i !== index) item.ativo = false;
    });
  }
}
