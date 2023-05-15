import Escolaridade from "../../enums/escolaridade";
import Etnia from "../../enums/etnia";
import { Endereco } from "../endereco";
import { Usuario } from "../usuario";

export class Prestador {
    id!: number;
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
}