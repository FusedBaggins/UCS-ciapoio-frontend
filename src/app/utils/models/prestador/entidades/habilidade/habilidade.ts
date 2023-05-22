import { Prestador } from "../../prestador";


export class Habilidade {
    id!: number;
    descricao!: string;
    observacao!: string;
    prestador!: Prestador;
}