import Stack from "./lib/Stack.mjs";

let pilha = new Stack();

console.log(pilha.print());
console.log("Está vazia? ", pilha.isEmpty);

pilha.insertData(35);
pilha.insertData(77);
pilha.insertData(19);

console.log(pilha.print());
console.log("Está vazia? ", pilha.isEmpty);

let removed = pilha.removeData();
console.log({removed}, pilha.print());
