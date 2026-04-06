import { Pokemon } from "./Pokemon";

export class Agua extends Pokemon {

    public visualizar(): void {
        super.visualizar();
        console.log("\n Informações adicionais do Pokemon: \n");
        console.log(`O pokemon  do tipo ${this.tipo} é fraco contra: [Elétrico, Planta]`);
        console.log(`O pokemon  do tipo ${this.tipo} tem vantagem contra: [Fogo, Terrestre]`);
    }

}