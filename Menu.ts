import readlinesync = require("readline-sync");
import { PokemonController } from "./src/controller/PokemonController";
import { Agua } from "./src/model/Agua";
import { Eletrico } from "./src/model/Eletrico";
import { Fogo } from "./src/model/Fogo";
import { Grama } from "./src/model/Grama";
import { colors } from "./src/util/Colors";

export function main(){

    let opcao: number;

    const controller = new PokemonController();

    while(true){
        console.log(colors.fg.yellowstrong, "******************************************************");
        console.log("                                                      ");
        console.log("           CENTRO POKEMON - MENU PRINCIPAL            ");
        console.log("                                                      ");
        console.log("******************************************************");
        console.log("                                                      ");
        console.log("1 - Cadastrar Pokemon");
        console.log("2 - Listar Pokemons");
        console.log("3 - Atualizar Pokemon");
        console.log("4 - Deletar Pokemon");
        console.log("5 - Buscar Pokemon");
        console.log("0 - Sair");
        console.log("                                                      ");
        console.log("******************************************************");
        console.log("                                                      ", colors.reset);

        opcao = readlinesync.questionInt("Digite a opcao desejada: ");

        if(opcao === 0){
            console.log(colors.fg.blue, "************************************************************");
            console.log("\n   Centro Pokemon - Obrigado por usar nosso sistema!    \n");
            console.log("************************************************************");
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch(opcao){

            case 1:
                console.log(colors.fg.whitestrong, "\nCadastrar Pokemon\n", colors.reset);

                console.log("1 - Agua\n2 - Eletrico\n3 - Fogo\n4 - Grama");
                let tipo = readlinesync.questionInt("Escolha o tipo: ");

                let id = readlinesync.questionInt("Digite o ID: ");
                let nome = readlinesync.question("Nome do Pokemon: ");
                let geracao = readlinesync.questionInt("Geracao do Pokemon (1-8): ");

                let pokemon;

                if(tipo == 1){
                    pokemon = new Agua(id, nome, "Agua", geracao);

                }else if(tipo == 2){
                    pokemon = new Eletrico(id, nome, "Eletrico", geracao);

                }else if(tipo == 3){
                    pokemon = new Fogo(id, nome, "Fogo", geracao);

                }else if(tipo == 4){
                    pokemon = new Grama(id, nome, "Grama", geracao);

                }else{
                    console.log(colors.fg.red, "Tipo inválido!", colors.reset);
                    break;
                }

                controller.cadastrar(pokemon);
                keyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong, "\nListar Pokemons\n", colors.reset);
                controller.listarTodos();
                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\nAtualizar Pokemon\n", colors.reset);

                let idAtualizar = readlinesync.questionInt("ID: ");

                console.log("1 - Agua\n2 - Eletrico\n3 - Fogo\n4 - Grama");
                let tipoAtualizar = readlinesync.questionInt("Tipo: ");

                let nomeAtualizar = readlinesync.question("Nome: ");
                let geracaoAtualizar = readlinesync.questionInt("Geracao: ");

                let pokemonAtualizado;

                if(tipoAtualizar == 1){
                    pokemonAtualizado = new Agua(idAtualizar, nomeAtualizar, "Agua", geracaoAtualizar);

                }else if(tipoAtualizar == 2){
                    pokemonAtualizado = new Eletrico(idAtualizar, nomeAtualizar, "Eletrico", geracaoAtualizar);

                }else if(tipoAtualizar == 3){
                    pokemonAtualizado = new Fogo(idAtualizar, nomeAtualizar, "Fogo", geracaoAtualizar);

                }else if(tipoAtualizar == 4){
                    pokemonAtualizado = new Grama(idAtualizar, nomeAtualizar, "Grama", geracaoAtualizar);

                }else{
                    console.log(colors.fg.red, "Tipo inválido!", colors.reset);
                    break;
                }

                controller.atualizar(pokemonAtualizado);
                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong, "\nDeletar Pokemon\n", colors.reset);

                let idRemover = readlinesync.questionInt("ID: ");
                controller.deletar(idRemover);

                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong, "\nBuscar Pokemon\n", colors.reset);

                let idBuscar = readlinesync.questionInt("ID: ");
                controller.procurarPorId(idBuscar);

                keyPress();
                break;

            default:
                console.log(colors.fg.red, "\nOpcao invalida!\n", colors.reset);
                keyPress();
                break;
        }
    }
}

main();

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione ENTER para continuar...");
    readlinesync.prompt();
}
