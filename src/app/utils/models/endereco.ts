import { Cidade } from "./cidade";

export class Endereco {
    public id!: number;
    public cep!: number;
    public rua!: string;
    public numero!: number;
    public bairro!: string;
    public complemento!: string;
    public cidade!: Cidade
}
