export class Usuario {
    id!: number;
    nome!: string;
    usuario!: string;
    senha!: string;
    hash!: string;
    ativo!: boolean;
    administrador!: boolean;
    data_inativacao!: Date;
}