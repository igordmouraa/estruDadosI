import Queue from "../lib/Queue.mjs"

const fila = new Queue()

fila.enqueue("Cliente 1")
fila.enqueue("Cliente 2")
fila.dequeue()
fila.enqueue("Cliente 3")
fila.dequeue()


console.log("Número de operações realizadas: ", fila.getOperationCount()) 
