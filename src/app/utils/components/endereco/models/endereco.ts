import { Cidade } from "src/app/utils/models/cidade";

export interface Endereco {
    id: number;
    cep: string;
    rua: string;
    numero: number;
    bairro: string;
    complemento?: string;
    cidade?: Cidade;
    cidadeId?:number;
}