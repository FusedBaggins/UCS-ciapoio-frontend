import UsoDrogaFrequencia from "src/app/utils/enums/uso-droga-frequencia";
import { Droga } from "../droga/droga";
import { FichaMedica } from "../ficha-medica/ficha-medica";

export class UsoDroga {
    id!: number;
    observacao!: string;
    frequencia!: UsoDrogaFrequencia;
    fichaMedia!: FichaMedica;
    drogaId!: number;
}
