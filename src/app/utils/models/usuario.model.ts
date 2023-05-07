export interface Usuario{
    id:number;
    nome:string;
    usuario:string;
    senha?:string;
    ativo?:boolean;
    administrador?:boolean;
    dataInativacao?:Date;
}