import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListagemCiapComponent } from "./listagem-ciap.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ListaEntidadeModule } from "src/app/utils/components/lista-entidade/lista-entidade.module";

const routes: Routes = [
    {
        path: '',
        component: ListagemCiapComponent
    }
];

@NgModule({

    imports: [
        RouterModule.forChild(routes),
        MatInputModule,
        MatFormFieldModule,
        CommonModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,

        ListaEntidadeModule
    ],
    declarations: [
        ListagemCiapComponent
    ]

})

export class ListagemCiapModule { }
