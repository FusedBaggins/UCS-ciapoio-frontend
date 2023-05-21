import { Instituicao } from "./instituicao";
import { Prestador } from "./prestador/prestador";
import { Processo } from "./processo";


export class Visita {
    id!: number;
    status!: boolean;
    observacao!: string;
    motivoReprovacao!: string;
    prazoAceite!: Date;
    dataAceite!: Date;
    dataVisita!: Date;
    processo!: Processo;
    instituicao!: Instituicao;
    prestador!: Prestador;
}