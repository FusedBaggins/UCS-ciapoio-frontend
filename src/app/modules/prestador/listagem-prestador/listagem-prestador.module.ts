import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { ListagemPrestadorComponent } from "./listagem-prestador.component";

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
        MatListModule
    ],
    declarations: [
        ListagemPrestadorComponent
    ]

})

export class ListagemPrestadorModule { }
