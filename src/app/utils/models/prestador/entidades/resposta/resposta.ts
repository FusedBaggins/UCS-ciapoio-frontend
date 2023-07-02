import { Prestador } from '../../prestador';
import { Pergunta } from '../pergunta/pergunta';

export class Resposta {
    id!: number;
    descricao!: string;
    perguntaId!: number;
    pergunta!: Pergunta;
    prestador!: Prestador;


    constructor(pergunta?: Pergunta) {
        if(pergunta) {
            this.pergunta = pergunta;
            this.perguntaId = pergunta.id;
        }
    }
}
