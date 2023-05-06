import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListagemCiapComponent } from "./listagem-ciap.component";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";

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
        MatListModule
    ],
    declarations: [
        ListagemCiapComponent
    ]

})

export class ListagemCiapModule { }
