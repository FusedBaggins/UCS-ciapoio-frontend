import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";

import { CiapRoutingModule } from "./ciap-routing.module";
import { DetalheCiapComponent } from './components/detalhe-ciap/detalhe-ciap.component';


@NgModule({
    declarations: [
        DetalheCiapComponent
    ],
    imports: [
        CommonModule,
        CiapRoutingModule,

        MatIconModule,
        MatButtonModule,
    ]
})

export class CiapModule { }