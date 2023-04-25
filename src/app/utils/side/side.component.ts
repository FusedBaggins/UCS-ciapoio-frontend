import { Component } from '@angular/core';

@Component({
  selector: 'side-component',
  templateUrl: 'side.component.html'
})

export class SideComponent {

    public links = [{link: '', titulo: 'teste', isActive: true}]

}
