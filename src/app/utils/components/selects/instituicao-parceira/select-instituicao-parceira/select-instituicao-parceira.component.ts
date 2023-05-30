import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectDefault } from '../../../selectModels/selectDefault';
import { InstituicaoParceiraServiceService } from 'src/app/modules/instituicao-parceira/services/instituicao-parceira-service.service';

@Component({
  selector: 'app-select-instituicao-parceira',
  templateUrl: './select-instituicao-parceira.component.html',
  styleUrls: ['./select-instituicao-parceira.component.scss']
})
export class SelectInstituicaoParceiraComponent {
  public instituicoes!: SelectDefault[];
  @Input() selectedInstituicao!: SelectDefault;
  @Output() selectedInstituicaoChange = new EventEmitter<SelectDefault>();
  @Output() optionsLoaded = new EventEmitter<void>();

  constructor(private instituicaoParceiraService: InstituicaoParceiraServiceService) {}

  ngOnInit(): void {
    this.instituicaoParceiraService.getInstituicoesSelect().subscribe((data) => {
      this.instituicoes = data;
      this.optionsLoaded.emit();
    });
  }

  onChange(): void {
    console.log(this.selectedInstituicao)
    this.selectedInstituicaoChange.emit(this.selectedInstituicao);
  }
}
