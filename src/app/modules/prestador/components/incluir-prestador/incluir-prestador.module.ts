import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IncluirPrestadorComponent } from "./incluir-prestador.component";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from "@angular/material/divider";
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDrogaUtilizadaComponent } from '../dialogs/dialog-droga-utilizada/dialog-droga-utilizada.component';
import { DialogCursoComponent } from "../dialogs/dialog-curso/dialog-curso.component";
import { DialogExperienciaProfissionaComponent } from "../dialogs/dialog-experiencia-profissiona/dialog-experiencia-profissiona.component";
import { DialogHabilidadeComponent } from "../dialogs/dialog-habilidade/dialog-habilidade.component";
import { DialogIntegranteComponent } from "../dialogs/dialog-integrante/dialog-integrante.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatListModule } from "@angular/material/list";
import { CommonModule } from "@angular/common";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DialogPenaAlternativaComponent } from "../dialogs/dialog-pena-alternativa/dialog-pena-alternativa.component";
import { NgxMaskModule } from "ngx-mask";

const routes: Routes = [
    {
        path: '',
        component: IncluirPrestadorComponent
    },
    {
        path: ':id',
        component: IncluirPrestadorComponent
    }
];

@NgModule({

    imports: [
        RouterModule.forChild(routes),
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatStepperModule,
        MatButtonModule,
        MatChipsModule,
        MatDividerModule,
        MatDialogModule,
        ReactiveFormsModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatListModule,
        CommonModule,
        MatCheckboxModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [
        IncluirPrestadorComponent,
        DialogCursoComponent,
        DialogDrogaUtilizadaComponent,
        DialogExperienciaProfissionaComponent,
        DialogHabilidadeComponent,
        DialogIntegranteComponent,
        DialogPenaAlternativaComponent
    ],
    entryComponents: [
        DialogCursoComponent,
        DialogDrogaUtilizadaComponent,
        DialogExperienciaProfissionaComponent,
        DialogHabilidadeComponent,
        DialogIntegranteComponent,
        DialogPenaAlternativaComponent
    ]

})

export class IncluirPrestadorModule { }
