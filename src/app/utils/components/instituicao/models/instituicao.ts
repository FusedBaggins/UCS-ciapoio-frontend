export interface Instituicao {
    id: number;
    nome: string;
    cnpj: string;
    email: string;
    telefone1: string;
    telefone2?: string;
    tipo_instituicao: number;
    observacao?: string;
    data_credenciamento?: Date;
    data_descredenciamento?: Date;
    endereco?: any;
}