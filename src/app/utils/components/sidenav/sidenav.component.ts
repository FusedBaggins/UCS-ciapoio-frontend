import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public links = [{ link: '', titulo: 'teste', isActive: true }];

  constructor(private _sidenavService: SidenavService) {

  }

  ngOnInit(): void {
    this._sidenavService.getMenu().subscribe({
      next:(v)=>{
        console.log(v);
        
      }
    })
  }
}
