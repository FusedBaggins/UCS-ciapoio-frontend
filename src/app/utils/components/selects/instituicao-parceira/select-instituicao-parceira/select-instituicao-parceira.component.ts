import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectDefault } from '../../../selectModels/selectDefault';
import { EntidadeParceiraService } from 'src/app/modules/entidade-parceira/services/entidade-parceira.service';
import TipoInstituicao from 'src/app/utils/enums/tipo-instituicao';

@Component({
  selector: 'app-select-instituicao-parceira',
  templateUrl: './select-instituicao-parceira.component.html',
  styleUrls: ['./select-instituicao-parceira.component.scss']
})
export class SelectInstituicaoParceiraComponent {
  @Input() tipoInstituicao!: TipoInstituicao;
  @Input() selectedInstituicao!: SelectDefault;
  @Output() selectedInstituicaoChange = new EventEmitter<SelectDefault>();
  @Output() optionsLoaded = new EventEmitter<void>();

  public instituicoes!: SelectDefault[];

  constructor(private entidadeParceiraService: EntidadeParceiraService) { }

  ngOnInit(): void {
    this.entidadeParceiraService.getInstituicoesSelect(this.tipoInstituicao).subscribe((data) => {
      this.instituicoes = data;
      this.optionsLoaded.emit();
    });
  }

  onChange(): void {
    this.selectedInstituicaoChange.emit(this.selectedInstituicao);
  }
}
