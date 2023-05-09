import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";

import { CiapRoutingModule } from "./ciap-routing.module";
import { DetalheCiapComponent } from './components/detalhe-ciap/detalhe-ciap.component';
import { ListaEntidadeModule } from "src/app/utils/components/lista-entidade/lista-entidade.module";


@NgModule({
    declarations: [
        DetalheCiapComponent
    ],
    imports: [
        CommonModule,
        CiapRoutingModule,

        MatIconModule,
        MatButtonModule,

        ListaEntidadeModule
    ]
})

export class CiapModule { }