export default class Stack {
    #data

    constructor(data){
        this.#data = [];
    }

    //metodo de inserção
    insertData(value){
        this.#data.push(value);
    }

    // metodo de remoção
    removeData(){
        return this.#data.pop();
    }

    // metodo pra consultar o topo da pilha
    peekData(){
        return this.#data[this.#data.length - 1];
    }

    get isEmpty(){
        return this.#data.length === 0;
    }

    print() {
        return JSON.stringify(this.#data);
    }
}