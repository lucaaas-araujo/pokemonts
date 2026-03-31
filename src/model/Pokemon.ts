export abstract class Pokemon {

        private _id: number;
        private _nome: string;
        private _tipo: string;
        private _geracao: number;

        constructor(id: number, nome: string, tipo: string, geracao: number) {
            this._id = id;
            this._nome = nome;
            this._tipo = tipo;
            this._geracao = geracao;
        }

        public get id(){
            return this._id;
        }

        public set id(id: number){
            this._id = id;
        }

        public get nome(){
            return this._nome;
        }

        public set nome(nome: string){
            this._nome = nome;
        }

        public get tipo(){
            return this._tipo;
        }

        public set tipo(tipo: string){
            this._tipo = tipo;
        }

        public get geracao(){
            return this._geracao;
        }

        public set geracao(geracao: number){
            this._geracao = geracao;
        }

        public visualizar(): void {
            console.log(" \n Informações do Pokemon: ");
            console.log(`ID: ${this._id}`);
            console.log(`Nome do Pokemon: ${this._nome}`);
            console.log(`Informe o tipo do Pokemon: ${this._tipo}`);
            console.log(`Informe a geração do Pokemon: ${this._geracao}`);
        }
        



}