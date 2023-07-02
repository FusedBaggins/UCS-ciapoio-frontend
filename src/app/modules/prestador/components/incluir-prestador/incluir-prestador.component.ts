import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogDrogaUtilizadaComponent } from '../dialogs/dialog-droga-utilizada/dialog-droga-utilizada.component';
import { DialogIntegranteComponent } from '../dialogs/dialog-integrante/dialog-integrante.component';
import { DialogExperienciaProfissionaComponent } from '../dialogs/dialog-experiencia-profissiona/dialog-experiencia-profissiona.component';
import { DialogCursoComponent } from '../dialogs/dialog-curso/dialog-curso.component';
import { DialogHabilidadeComponent } from '../dialogs/dialog-habilidade/dialog-habilidade.component';
import { Prestador } from 'src/app/utils/models/prestador/prestador';
import { PrestadorService } from '../../services/prestador.service';
import { FichaMedica } from 'src/app/utils/models/prestador/entidades/ficha-medica/ficha-medica';
import { UsoDroga } from 'src/app/utils/models/prestador/entidades/uso-droga/uso-droga';
import { MatChipListboxChange } from '@angular/material/chips';
import { Deficiencia } from 'src/app/utils/models/prestador/entidades/deficiencia/deficiencia';
import { Familiar } from 'src/app/utils/models/prestador/entidades/familiar/familiar';
import { Habilidade } from 'src/app/utils/models/prestador/entidades/habilidade/habilidade';
import { Curso } from 'src/app/utils/models/prestador/entidades/curso/curso';
import { Trabalho } from 'src/app/utils/models/prestador/entidades/trabalho/trabalho';
import { PerguntaService } from 'src/app/modules/pergunta/services/pergunta.service';
import { Pergunta } from 'src/app/utils/models/prestador/entidades/pergunta/pergunta';
import { Resposta } from 'src/app/utils/models/prestador/entidades/resposta/resposta';
import { DialogPenaAlternativaComponent } from '../dialogs/dialog-pena-alternativa/dialog-pena-alternativa.component';
import { AlternativaPenal } from 'src/app/utils/models/prestador/entidades/alternativa-penal/alternativa-penal';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectDefault } from 'src/app/utils/components/selectModels/selectDefault';
import { Droga } from 'src/app/utils/models/prestador/entidades/droga/droga';

@Component({
  selector: 'app-incluir-prestador',
  templateUrl: './incluir-prestador.component.html',
  styleUrls: ['./incluir-prestador.component.scss']
})
export class IncluirPrestadorComponent implements OnInit {

  private dialogConfig: MatDialogConfig = {
    width: '45vw',
  };

  public prestador = new Prestador();

  public edicao = false;
  public drogas = new Array<Droga>();

  public deficiencias = [
    { idDeficiencia: 1, nome: 'Física', selecionada: false },
    { idDeficiencia: 2, nome: 'Visual', selecionada: false },
    { idDeficiencia: 3, nome: 'Auditiva', selecionada: false },
    { idDeficiencia: 4, nome: 'Intelectual', selecionada: false },
    { idDeficiencia: 5, nome: 'Psicossocial', selecionada: false }
  ];

  public estadoCivil = [
    { id: 0, label: 'Solteiro' },
    { id: 1, label: 'Casado' },
    { id: 2, label: 'União Estável' },
    { id: 3, label: 'Divorciado' },
    { id: 4, label: 'Viúvo' }
  ];

  public etnia = [
    { id: 0, label: 'Branco' },
    { id: 1, label: 'Indígena' },
    { id: 2, label: 'Negro' },
    { id: 3, label: 'Amarelo' },
    { id: 4, label: 'Pardo' },
    { id: 5, label: 'Outro' }
  ];

  public escolaridade = [
    { id: 0, label: 'Sem instrução' },
    { id: 1, label: 'Fundamental incompleto' },
    { id: 2, label: 'Fundamental completo' },
    { id: 3, label: 'Ensino médio incompleto' },
    { id: 4, label: 'Ensino médio completo' },
    { id: 5, label: 'Superior incompleto' },
    { id: 6, label: 'Superior completo' },
    { id: 7, label: 'Outro' },
  ];


  constructor(
    public dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _prestadorService: PrestadorService,
    private _perguntaService: PerguntaService,
    private _router: Router) {
    this.prestador.fichaMedica = new FichaMedica();
    this.prestador.fichaMedica.usoDrogas = new Array<UsoDroga>();
    this.prestador.familiares = new Array<Familiar>();
    this.prestador.habilidades = new Array<Habilidade>();
    this.prestador.cursos = new Array<Curso>();
    this.prestador.trabalhos = new Array<Trabalho>();
    this.prestador.alternativasPenais = new Array<AlternativaPenal>();
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.edicao = true;
        this._prestadorService.getPrestador(params["id"]).subscribe(result => {
          this.prestador = (result as any).entidade;
          this.drogas = (result as any).drogas;

          if (!this.prestador.fichaMedica) {
            this.prestador.fichaMedica = new FichaMedica();
            this.prestador.fichaMedica.usoDrogas = new Array<UsoDroga>();
          }
          else {
            if (this.prestador.fichaMedica.deficiencias) {
              this.prestador.fichaMedica.deficiencias.forEach(x => {
                const deficienciaListagem = this.deficiencias.find(y => y.idDeficiencia == x.idDeficiencia);
                if (deficienciaListagem) {
                  deficienciaListagem.selecionada = true;
                }
              });
            }
          }
        });
      } else {
        this.edicao = false;
      }

      this._activatedRoute.queryParams.subscribe(params => {
        const { nome, telefone, entrevistaId } = params;
        if (nome) {
          this.prestador.nome = nome;
        }

        if (telefone) {
          this.prestador.telefone1 = telefone;
        }

        if (entrevistaId) {
          this.prestador.entrevistaId = entrevistaId;
        }
      });
    });

    this._perguntaService.getPerguntas(new Pergunta()).subscribe(perguntas => {
      const perguntasNaoRespondidas = perguntas
        .filter(x => !this.prestador.respostas.some(y => y.id === x.id));

      const novasRespostas = perguntasNaoRespondidas.map(p => new Resposta(p));
      this.prestador.respostas = this.prestador.respostas?.concat(novasRespostas) || [];
    });
  }

  public abreDialogDrogaUtilizada(usoDroga?: any): void {
    const config: MatDialogConfig = { ... this.dialogConfig, ...{ data: { usoDroga } } };
    const dialogRef = this.dialog.open(DialogDrogaUtilizadaComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.prestador.fichaMedica.usoDrogas = this.prestador.fichaMedica.usoDrogas || [];
        const index = this.prestador.fichaMedica.usoDrogas.findIndex(t => t.id === result.id);
        if (index !== -1) {
          this.prestador.fichaMedica.usoDrogas[index] = result;
        } else {
          this.prestador.fichaMedica.usoDrogas.push(result);
        }
      }
    });
  }

  public deficienciaMudou(deficiencia: any): void {
    deficiencia.selecionada = !deficiencia.selecionada;

    if (deficiencia.selecionada) {
      const deficienciaEntity = new Deficiencia();
      deficienciaEntity.id = deficiencia.id || null;
      deficienciaEntity.idDeficiencia = deficiencia.idDeficiencia;
      this.prestador.fichaMedica.deficiencias.push(deficienciaEntity);
    }
  }

  public abreDialogIntegrante(familiar?: Familiar): void {
    const config: MatDialogConfig = { ... this.dialogConfig, ...{ data: { familiar } } };
    const dialogRef = this.dialog.open(DialogIntegranteComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.prestador.familiares = this.prestador.familiares || [];
        const index = this.prestador.familiares.findIndex(familiar => familiar.id === result.id);
        if (index !== -1) {
          this.prestador.familiares[index] = result;
        } else {
          this.prestador.familiares.push(result);
        }
      }
    });
  }

  public abreDialogExperienceiaProfissional(): void {
    const config: MatDialogConfig = { ... this.dialogConfig, ...{ data: {} } };
    const dialogRef = this.dialog.open(DialogExperienciaProfissionaComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.prestador.trabalhos.push(result);
      }
    });
  }

  public abreDialogCurso(curso?: Curso): void {
    const config: MatDialogConfig = { ... this.dialogConfig, ...{ data: { curso } } };
    const dialogRef = this.dialog.open(DialogCursoComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.prestador.cursos = this.prestador.cursos || [];
        const index = this.prestador.cursos.findIndex(t => t.id === result.id);
        if (index !== -1) {
          this.prestador.cursos[index] = result;
        } else {
          this.prestador.cursos.push(result);
        }
      }
    });
  }

  public abreDialogHabilidade(habilidade?: any): void {
    const config: MatDialogConfig = { ... this.dialogConfig, ...{ data: { habilidade } } };
    const dialogRef = this.dialog.open(DialogHabilidadeComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.prestador.habilidades = this.prestador.habilidades || [];
        const index = this.prestador.habilidades.findIndex(t => t.id === result.id);
        if (index !== -1) {
          this.prestador.habilidades[index] = result;
        } else {
          this.prestador.habilidades.push(result);
        }
      }
    });
  }

  public abreDialogPenaAlternativa(): void {
    const config: MatDialogConfig = { ... this.dialogConfig, ...{ data: {} } };
    const dialogRef = this.dialog.open(DialogPenaAlternativaComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.prestador.alternativasPenais.push(result);
      }
    });
  }

  public adicionaPrestador(): void {
    this._prestadorService.addPrestadores(this.prestador).subscribe(resultado => {
      if (!this.edicao)
        this._router.navigate(['prestador', resultado.id]);
    });
  }

  getNomeDroga(droga: any) {
    const drogaSelect = this.drogas.find(x => x.id == droga);
    if (drogaSelect)
      return drogaSelect.nome;

    return "";
  }

}
