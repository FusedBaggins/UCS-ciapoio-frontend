import { Component } from '@angular/core';
import { Instituicao } from 'src/app/utils/components/instituicao/models/instituicao';

@Component({
  selector: 'app-detalhe-ciap',
  templateUrl: './detalhe-ciap.component.html',
  styleUrls: ['./detalhe-ciap.component.scss']
})
export class DetalheCiapComponent {


  onAtualizarInstituicao(instituicao: Instituicao): void {
    console.log(instituicao);
    
  }
}
