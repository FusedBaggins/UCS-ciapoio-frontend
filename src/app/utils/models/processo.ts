import { Instituicao } from "./instituicao";
import { Prestador } from "./prestador/prestador";
import { Vara } from "./vara";

export class Processo {
    id!: number;
    nro_processo!: number;
    nro_artigo_penal!: number;
    pena_originaria!: string;
    pena_originaria_regime!: number;
    inciso!: string;
    detalhamento!: string;
    prd!: number;
    prd_descricao!: string;
    horas_cumprir!: number;
    qtd_penas_anteriores!: number;
    possui_multa!: boolean;
    valor_a_pagar!: number;
    prestador!: Prestador;
    instituicao!: Instituicao;
    vara!: Vara;
    descricao_alternativa_penal!: string;
}
