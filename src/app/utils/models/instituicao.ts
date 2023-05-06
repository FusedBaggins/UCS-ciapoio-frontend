import { Endereco } from "./endereco";

export class Instituicao {
    public id!: number;
    public nome!: string;
    public cnpj!: string;
    public email!: string;
    public telefone1!: string;
    public telefone2!: string;
    public tipo_instituicao!: number;
    public observacao!: string;
    public data_credenciamento!: Date;
    public data_descredenciamento!: Date;
    public endereco!: Endereco;
}