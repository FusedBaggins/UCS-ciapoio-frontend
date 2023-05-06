import { Injectable } from "@angular/core";
import { Instituicao } from "../models/instituicao";
import { Observable } from "rxjs";

@Injectable()

export class RequestService {

    public buscaListaCiap(): Observable<Array<Instituicao>> {
        return new Observable(observer => {
            observer.next(this.instituicoes);
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

}