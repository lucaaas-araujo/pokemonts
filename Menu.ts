import readlinesync = require("readline-sync");
import { Agua } from "./src/model/Agua";

export function main(){

    let opcao: number;

    const pokemons: Agua = new Agua(1, "Squirtle", "Água", 1);
    pokemons.visualizar();

    while(true){
        console.log("******************************************************");
        console.log("                                                      ");
        console.log("           Centro Pokemon - MENU PRINCIPAL            ");
        console.log("                                                      ");
        console.log("******************************************************");
        console.log("                                                      ");
        console.log("              1 - Cadastrar Pokemon                   ");
        console.log("              2 - Listar Pokemons                     ");
        console.log("              3 - Atualizar Pokemon                   ");
        console.log("              4 - Deletar Pokemon                     ");
        console.log("              5 - Buscar Pokemon por Geração          ");
        console.log("              0 - Sair                                ");
        console.log("                                                      ");
        console.log("******************************************************");
        console.log("                                                      ");

        console.log("Digite a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao === 0){
            console.log("************************************************************");
            console.log("\n   Centro Pokemon - Obrigado por usar nosso sistema!    \n");
            console.log("************************************************************");
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log("Opção 1 - Cadastrar Pokemon");

                break;

            case 2:
                console.log("Opção 2 - Listar Pokemons");

                break;

            case 3:
                console.log("Opção 3 - Atualizar Pokemon");

                break;

            case 4:
                console.log("Opção 4 - Deletar Pokemon");

                break;

            case 5:
                console.log("Opção 5 - Buscar Pokemon por Geração");

                break;

            default:
                console.log("Opção inválida! Por favor, digite uma opção válida.");

                break;
        }
    }
}

main();