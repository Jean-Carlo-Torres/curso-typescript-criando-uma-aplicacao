export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Array<Negociacao>
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
