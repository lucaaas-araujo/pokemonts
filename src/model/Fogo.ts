import { Pokemon } from "./Pokemon";

export class Fogo extends Pokemon {

    public visualizar(): void {
        super.visualizar();
        console.log("Informações adicionais do Pokemon do tipo Fogo: ");
        console.log(`O pokemon  do tipo ${this.tipo} é fraco contra: [Água, Terrestre e Pedra]`);
        console.log(`O pokemon  do tipo ${this.tipo} tem vantagem contra: [Planta, Gelo, Inseto e Aço]`);
    }

}