import { Prestador } from "../../prestador";

export class Curso {
    id!: number;
    instituicao!: string;
    curso!: string;
    observacao!: string;
    prestador!: Prestador;
}