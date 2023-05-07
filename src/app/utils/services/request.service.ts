import { Injectable } from "@angular/core";
import { Instituicao } from "../models/instituicao";
import { Observable } from "rxjs";
import { Prestador } from "../models/prestador/prestador";
import Escolaridade from "../enums/escolaridade";

@Injectable()

export class RequestService {

    public buscaListaCiap(): Observable<Array<Instituicao>> {
        return new Observable(observer => {
            observer.next(this.instituicoes);
            observer.complete();
        });
    }

    public buscaListaPrestador(): Observable<Array<Prestador>> {
        return new Observable(observer => {
            observer.next(this.prestadores);
            observer.complete();
        });
    }

    public instituicoes: Array<Instituicao> = [
        {
            cnpj: "",
            data_credenciamento: new Date(),
            data_descredenciamento: new Date(),
            email: "",
            endereco: { bairro: "", cep: 0,  cidade: {id: 0, nome: "", unidadeFederativa: {id: 0, nome: "", sigla: ""}}, complemento: "", id: 0, numero: 0, rua: ""},
            id: 0,
            nome: "Ciap1",
            observacao: "Informações extras sobre a CIAP",
            telefone1: "",
            telefone2: "",
            tipo_instituicao: 0
        },
        {
            cnpj: "",
            data_credenciamento: new Date(),
            data_descredenciamento: new Date(),
            email: "",
            endereco: { bairro: "", cep: 0,  cidade: {id: 0, nome: "", unidadeFederativa: {id: 0, nome: "", sigla: ""}}, complemento: "", id: 0, numero: 0, rua: ""},
            id: 1,
            nome: "Ciap2",
            observacao: "Informações extras sobre a CIAP",
            telefone1: "",
            telefone2: "",
            tipo_instituicao: 0
        }];

        public prestadores: Array<Prestador> = [
            {
               cpf: "",
               dt_nascimento: new Date(2001, 1, 1),
               endereco: { bairro: "", cep: 0,  cidade: {id: 0, nome: "Farroupilha", unidadeFederativa: {id: 0, nome: "", sigla: "RS"}}, complemento: "", id: 0, numero: 0, rua: ""},
               escolaridade: Escolaridade.FundamentlaCompleto,
               estado_civil: 0,
               etnia: 0,
               id: 0, 
               nome: "Pessoa 1",
               renda_familiar: 0,
               telefone1: "",
               usuario: {administrador: false, ativo: false, data_inativacao: new Date(), hash: "", id: 0, nome: "", senha: "", usuario: ""}
            }];

}