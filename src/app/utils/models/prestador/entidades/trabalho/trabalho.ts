import { Endereco } from "../../../endereco";
import { Prestador } from "../../prestador";

export class Trabalho {
    id!: number;
    descricao!: string;
    horario_inicio!: Date;
    horario_fim!: Date;
    segunda!: boolean;
    terca!: boolean;
    quarta!: boolean;
    quinta!: boolean;
    sexta!: boolean;
    sabado!: boolean;
    domingo!: boolean;
    observacao!: string
    endereco!: Endereco;
    prestador!: Prestador;
}