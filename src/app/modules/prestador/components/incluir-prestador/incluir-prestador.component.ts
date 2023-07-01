import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

@Component({
  selector: 'app-incluir-prestador',
  templateUrl: './incluir-prestador.component.html',
  styleUrls: ['./incluir-prestador.component.scss']
})
export class IncluirPrestadorComponent implements OnInit {

  public prestador = new Prestador();

  public edicao = false;

  public deficiencias = [
    { id: 1, nome: 'Física' },
    { id: 2, nome: 'Visual' },
    { id: 3, nome: 'Auditiva' },
    { id: 4, nome: 'Intelectual' },
    { id: 5, nome: 'Psicossocial' }
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
          if (!this.prestador.fichaMedica) {
            this.prestador.fichaMedica = new FichaMedica();
            this.prestador.fichaMedica.usoDrogas = new Array<UsoDroga>();
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
      this.prestador.respostas = perguntas.map(p => new Resposta(p));
    });
  }

  public abreDialogDrogaUtilizada(): void {
    const dialogRef = this.dialog.open(DialogDrogaUtilizadaComponent, { data: {}, });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.prestador.fichaMedica.usoDrogas.push(result);
      }
    });
  }

  public deficienciaMudou(event: MatChipListboxChange): void {
    this.prestador.fichaMedica.deficiencias = event.value;
  }

  public abreDialogIntegrante(): void {
    const dialogRef = this.dialog.open(DialogIntegranteComponent, { data: {}, });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.prestador.familiares.push(result);
      }
    });
  }

  public abreDialogExperienceiaProfissional(): void {
    const dialogRef = this.dialog.open(DialogExperienciaProfissionaComponent, { data: {}, });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.prestador.trabalhos.push(result);
      }
    });
  }

  public abreDialogCurso(): void {
    const dialogRef = this.dialog.open(DialogCursoComponent, { data: {}, });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.prestador.cursos.push(result);
      }
    });
  }

  public abreDialogHabilidade(): void {
    const dialogRef = this.dialog.open(DialogHabilidadeComponent, { data: {}, });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.prestador.habilidades.push(result);
      }
    });
  }

  public abreDialogPenaAlternativa(): void {
    const dialogRef = this.dialog.open(DialogPenaAlternativaComponent, { data: {}, });

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

}
