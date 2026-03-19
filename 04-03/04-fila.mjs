import Queue from "./lib/Queue.mjs";

let fila = new Queue();
console.log(fila.print());
console.log("Está vazia? ", fila.isEmpty);

fila.enqueue("igor");
fila.enqueue("joao");
fila.enqueue("heitor");
fila.enqueue("gabriel");

console.log(fila.print());

let proximo = fila.peek();
console.log({proximo});

let atendido = fila.dequeue();
console.log({atendido});
console.log(fila.print());

proximo = fila.peek();
console.log({proximo});

fila.enqueue("Adelmo Bar");
console.log(fila.print());






