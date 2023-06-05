import SituacaoVisita from "../enums/situacao-visita";

export default class SituacaoVisitaHelper {
  static RetornarOptionsSituacaoVisita() {
    return Object.keys(SituacaoVisita)
      .filter((key) => isNaN(Number(key)) && key !== "filter")
      .map((key) => ({
        label: key,
        id: SituacaoVisita[key as keyof typeof SituacaoVisita],
      }));
  }
}
