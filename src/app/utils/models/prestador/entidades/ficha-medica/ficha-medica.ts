import { Prestador } from "../../prestador";
import { Deficiencia } from "../deficiencia/deficiencia";
import { UsoDroga } from "../uso-droga/uso-droga";

export class FichaMedica {
    id!: number;
    descricao!: string;
    prestador!: Prestador;

    deficiencias!: Array<Deficiencia>;
    usoDrogas!: Array<UsoDroga>;
}