export default class Deque {
 
    #data

    constructor(){
        this.#data = [];
    };


    // método de inserção de dados no inicio da estrutura
    insertFront(value){
        this.#data.unshift(value);
    };

    insertBack(value){
        this.#data.push(value);
    };

    removeFront(){
      return this.#data.shift();
    };

    removeBack(){
        return this.#data.pop();
    };

    // método pra consultar o inicio da estrutura
    peekFront(){
        return this.#data[0];
    };

    peekBack(){
        return this.#data[this.#data.length - 1];
    }

    get isEmpty(){

    }
}