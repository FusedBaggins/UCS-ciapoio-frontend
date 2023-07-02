import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { ListagemPrestadorComponent } from "./listagem-prestador.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FormModule } from "src/app/utils/components/form/form.module";
import { ListaEntidadeModule } from "src/app/utils/components/lista-entidade/lista-entidade.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

const routes: Routes = [
    {
        path: '',
        component: ListagemPrestadorComponent
    }
];

@NgModule({

    imports: [
        RouterModule.forChild(routes),
        MatInputModule,
        MatFormFieldModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        FormModule,
        ListaEntidadeModule,
        FlexLayoutModule,
    ],
    declarations: [
        ListagemPrestadorComponent
    ]

})

export class ListagemPrestadorModule { }
