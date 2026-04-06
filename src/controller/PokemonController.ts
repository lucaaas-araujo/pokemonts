import { Pokemon } from "../model/Pokemon";
import { PokemonRepository } from "../repository/PokemonRepository";
import { colors } from "../util/Colors";

export class PokemonController implements PokemonRepository {

    private listaPokemons: Array<Pokemon> = new Array<Pokemon>();
    private id: number = 0;

    procurarPorId(id: number): void {

        let busca = this.buscarNaCollection(id);

        if (busca != null){
            busca.visualizar();
        } else {
            console.log(colors.fg.red,"\nPokemon não encontrado!", colors.reset);
        }
    }

    listarTodos(): void {

        if(this.listaPokemons.length == 0){
            console.log(colors.fg.red, "\nNenhum Pokemon cadastrado!\n", colors.reset);
            return;
        }

        for (let pokemon of this.listaPokemons) {
            pokemon.visualizar();
        }
    }

    cadastrar(pokemon: Pokemon): void {
        this.listaPokemons.push(pokemon);
        console.log(colors.fg.green, "Pokemon cadastrado com sucesso!", colors.reset);
    }

    atualizar(pokemon: Pokemon): void {

        let cont: number = 0;
        let encontrado: boolean = false;

        for (let item of this.listaPokemons) {

            if (item.id == pokemon.id) {

                this.listaPokemons[cont] = pokemon;
                console.log(colors.fg.green, "\nPokemon atualizado com sucesso!\n", colors.reset);

                encontrado = true;
                break;
            }
            cont++;
        }

        if (!encontrado){
            console.log(colors.fg.red,"\nPokemon não encontrado!\n", colors.reset);
        }
    }

    deletar(id: number): void {

        let cont: number = 0;
        let encontrado: boolean = false;

        for (let pokemon of this.listaPokemons) {
            if (pokemon.id == id) {
                this.listaPokemons.splice(cont, 1);
                console.log(colors.fg.green,"Pokemon removido com sucesso!", colors.reset);
                encontrado = true;
                break;
            }
            cont++;
        }

        if (!encontrado) {
            console.log(colors.fg.red,"ID do Pokemon não encontrado!",colors.reset);
        }
    }

    public gerarId(): number {
        return ++this.id;
    }

    public buscarNaCollection(id: number): Pokemon | null{

        for (let pokemon of this.listaPokemons){
            if (pokemon.id === id)
                return pokemon
        }

        return null;
    }
}