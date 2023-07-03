import { Processo } from "./processo";

export class AgendamentoPrestacao {
  id!: number;
  horario_inicio!: Date;
  horario_fim!: Date;
  data_inicial!: Date;
  segunda!: number;
  terca!: number;
  quarta!: number;
  quinta!: number;
  sexta!: number;
  sabado!: number;
  domingo!: number;
  dtaAlteracao!: Date;
  processoId?: number;
  visitaId?: number;
  processo!: Processo;
  frequencias?: [];
}
