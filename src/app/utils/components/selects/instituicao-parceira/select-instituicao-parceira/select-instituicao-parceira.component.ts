import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectDefault } from '../../../selectModels/selectDefault';
import { EntidadeParceiraService } from 'src/app/modules/entidade-parceira/services/entidade-parceira.service';

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

  constructor(private entidadeParceiraService: EntidadeParceiraService) { }

  ngOnInit(): void {
    this.entidadeParceiraService.getInstituicoesSelect().subscribe((data) => {
      this.instituicoes = data;
      this.optionsLoaded.emit();
    });
  }

  onChange(): void {
    console.log(this.selectedInstituicao)
    this.selectedInstituicaoChange.emit(this.selectedInstituicao);
  }
}
