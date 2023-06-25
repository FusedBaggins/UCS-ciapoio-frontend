import { Instituicao } from "src/app/utils/models/instituicao";
import { Prestador } from "../../prestador/models/prestador";
import { Vara } from "../../vara/models/vara";

export interface Processo {
    id?: number;
    nro_processo?: number;
    nro_artigo_penal?: number;
    pena_originaria?: string;
    pena_originaria_regime?: number;
    inciso?: string;
    detalhamento?: string;
    prd?: number;
    prd_descricao?: string;
    horas_cumprir?: number;
    qtd_penas_anteriores?: number;
    possui_multa?: boolean;
    valor_a_pagar?: number;
    prestador?: Prestador;
    instituicao?: Instituicao;
    vara?: Vara
}
