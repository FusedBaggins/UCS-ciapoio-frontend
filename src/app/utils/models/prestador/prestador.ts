import Escolaridade from "../../enums/escolaridade";
import Etnia from "../../enums/etnia";
import { Endereco } from "../endereco";
import { Usuario } from "../usuario";
import { AlternativaPenal } from "./entidades/alternativa-penal/alternativa-penal";
import { Curso } from "./entidades/curso/curso";
import { Familiar } from "./entidades/familiar/familiar";
import { FichaMedica } from "./entidades/ficha-medica/ficha-medica";
import { Habilidade } from "./entidades/habilidade/habilidade";
import { Resposta } from "./entidades/resposta/resposta";
import { Trabalho } from "./entidades/trabalho/trabalho";

export class Prestador {
    id!: number;
    entrevistaId!: number;
    nome!: string;
    cpf!: string;
    nome_mae?: string;
    dt_nascimento!: Date;
    estado_civil!: number;
    etnia!: Etnia;
    escolaridade!: Escolaridade;
    renda_familiar!: number;
    telefone1!: string;
    telefone2?: string;
    religiao?: string;
    image?: File;
    endereco!: Endereco;
    usuario!: Usuario;

    fichaMedica!: FichaMedica;
    familiares!: Array<Familiar>;
    habilidades!: Array<Habilidade>;
    cursos!: Array<Curso>;
    trabalhos!: Array<Trabalho>;
    respostas!: Array<Resposta>;
    alternativasPenais!: Array<AlternativaPenal>;
}
