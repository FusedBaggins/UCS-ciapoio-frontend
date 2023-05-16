import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";

import { CiapRoutingModule } from "./ciap-routing.module";
import { FormModule } from "src/app/utils/components/form/form.module";
import { DetalheCiapComponent } from './components/detalhe-ciap/detalhe-ciap.component';
import { ListagemCiapComponent } from './components/listagem-ciap/listagem-ciap.component';
import { ListaEntidadeModule } from "src/app/utils/components/lista-entidade/lista-entidade.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InstituicaoModule } from "src/app/utils/components/instituicao/instituicao.module";


@NgModule({
    declarations: [
        DetalheCiapComponent,
        ListagemCiapComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,

        CiapRoutingModule,

        MatIconModule,
        MatListModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,

        FormModule,
        InstituicaoModule,
        ListaEntidadeModule
    ]
})

export class CiapModule { }