import { Pokemon } from "./Pokemon";

export class Grama extends Pokemon {

    public visualizar(): void {
        super.visualizar();
        console.log("Informações adicionais do Pokemon do tipo Grama: ");
        console.log(`O pokemon  do tipo ${this.tipo} é fraco contra: [Fogo, Gelo, Voador, Veneno e Inseto]`);
        console.log(`O pokemon  do tipo ${this.tipo} tem vantagem contra: [Água, Pedra e Terrestre]`);
    }

}