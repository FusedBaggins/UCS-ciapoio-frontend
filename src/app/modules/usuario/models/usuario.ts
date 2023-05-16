import { Instituicao } from "src/app/utils/components/instituicao/models/instituicao";

export interface Usuario {
    id: number;
    nome: string;
    ativo: boolean;
    data_inativacao: Date;
    isAdministrador: boolean;
    instituicao: Instituicao
}