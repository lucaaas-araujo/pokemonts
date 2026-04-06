import { Pokemon } from "../model/Pokemon";

export interface PokemonRepository {

    // CRUD - dos pokemons

    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(pokemon: Pokemon): void;
    atualizar(pokemon: Pokemon): void;
    deletar(id: number): void;
}