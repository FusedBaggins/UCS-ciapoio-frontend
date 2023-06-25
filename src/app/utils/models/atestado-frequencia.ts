import { Processo } from "./processo";

export class AtestadoFrequencia {
    id!: number;
    dt_entrada!: Date;
    dt_saida!: Date;
    observacoes!: string;
    processo!: Processo;
}