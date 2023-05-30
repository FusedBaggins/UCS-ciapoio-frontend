import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrestadorService } from 'src/app/modules/prestador/services/prestador.service';
import { SelectDefault } from '../../../selectModels/selectDefault';

@Component({
  selector: 'app-select-prestador',
  templateUrl: './select-prestador.component.html',
  styleUrls: ['./select-prestador.component.scss']
})
export class SelectPrestadorComponent {
  public prestadores!: SelectDefault[];
  @Input() selectedPrestador!: SelectDefault;
  @Output() selectedPrestadorChange = new EventEmitter<SelectDefault>();
  @Output() optionsLoaded = new EventEmitter<void>();

  constructor(private prestadorService: PrestadorService) {}

  ngOnInit(): void {
    this.prestadorService.getPrestadoresSelect().subscribe((data) => {
      this.prestadores = data;
      this.optionsLoaded.emit();
    });
  }

  onChange(): void {
    this.selectedPrestadorChange.emit(this.selectedPrestador);
  }
}
