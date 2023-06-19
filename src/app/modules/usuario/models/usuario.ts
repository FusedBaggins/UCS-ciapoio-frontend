import Perfil from "src/app/utils/enums/perfil";
import { Instituicao } from "src/app/utils/components/instituicao/models/instituicao";


export interface Usuario {
    id: number;
    nome: string;
    senha?:string;
    confirmacao_senha?:string;
    ativo: boolean;
    tipo?: number;
    data_inativacao: Date;
    isAdministrador: boolean;
    instituicao: Instituicao;
    perfis: Perfil[];
}