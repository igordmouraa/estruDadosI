class Node {
    constructor(value){
        this.data = val;
        this.next = null;
    }
}

export default class LinkedList{
    #head  // inicio da lista (cabeça)
    #tail  // final da lista (rabo)
    #count // quantidade de nodos da lista

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    get isEmpty(){
        return this.#count === 0;       
    }

    get count(){
        return this.#count;
    }

    insert(pos, value){

        const inserted  = new Node(val);

        //1° Caso
        if(this.isEmpty){
            this.#head = inserted;
            this.#tail = inserted;
        }

        //2° caso = inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head;
            this.#head = inserted;
        }

        //3° Caso = inserção no final da lista
        else if(pos >= this.#count){
            this.#tail.next = inserted;
            this.#tail = inserted;
        }

        //4° Caso = Posição intermediária
        else{
            let before = this.#head;
            for(let i = 1; i < pos; i++){
                before = before.next;
            }

            let after = before.next

            inserted.next = after

            before.next = inserted
        }

        this.#count++

    }
}