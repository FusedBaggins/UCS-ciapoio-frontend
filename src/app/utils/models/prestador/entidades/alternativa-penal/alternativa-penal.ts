import { Prestador } from "../../prestador";

export class AlternativaPenal {
    id!: number;
    titulo!: string;
    descricao!: string;
    duracao!: string;
    prestador!: Prestador;
}