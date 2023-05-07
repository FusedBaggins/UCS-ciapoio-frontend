import { Prestador } from "../../prestador";

export class Familiar {
    id!: number;
    nome!: string;
    parentesco!: string;
    idade!: number;
    profissao!: string;
    observacao!: string;
    telefone!: string;
    prestador!: Prestador;
}