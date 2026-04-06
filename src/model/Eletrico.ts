import { Pokemon } from "./Pokemon";

export class Eletrico extends Pokemon {

    public visualizar(): void {
        super.visualizar();
        console.log("Informações adicionais do Pokemon do tipo Elétrico: ");
        console.log(`O pokemon  do tipo ${this.tipo} é fraco contra: [Terrestre]`);
        console.log(`O pokemon  do tipo ${this.tipo} tem vantagem contra: [Água, Voador]`);
    }

}