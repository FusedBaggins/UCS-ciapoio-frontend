import { Prestador } from "../../prestador";


export class Habilidade {
    id!: number;
    instituicao!: string;
    observacao!: string;
    prestador!: Prestador;
}