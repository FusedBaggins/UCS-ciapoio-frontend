import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { Observable, map, tap } from 'rxjs';

import { ItemMenu } from './models/item-menu';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  @ViewChild('snav') sideNav!: MatSidenav;
  public mobileQuery: MediaQueryList;
  public itensMenu$!: Observable<ItemMenu[]>;

  private _mobileQueryListener: () => void;

  constructor(
    private _mediaMatcher: MediaMatcher,
    private _sidenavService: SidenavService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
    this.mobileQuery = this._mediaMatcher.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this._changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', () => this._mobileQueryListener);

  }

  ngOnInit(): void {
    this.itensMenu$ = this._sidenavService.getMenu().pipe(
      map((items: ItemMenu[]) => {
        items?.forEach((item: ItemMenu) => item.ativo = false)
        return items.filter((item: ItemMenu) => item.visivel);
      }),
      tap(() => {
        if (!this.mobileQuery.matches) {
          this.sideNav.open();
          this._changeDetectorRef.detectChanges();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  onItemAtivoClicado(index: number, itens: ItemMenu[]): void {
    itens.forEach((item: ItemMenu, i: number) => {
      if (i !== index) item.ativo = false;
    });
  }
}
