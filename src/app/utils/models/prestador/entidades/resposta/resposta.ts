import { Prestador } from '../../prestador';
import { Pergunta } from '../pergunta/pergunta';

export class Resposta {
    id!: number;
    descricao!: string;
    pergunta!: Pergunta;
    prestador!: Prestador;
}