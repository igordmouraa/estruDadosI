import Deque from "../lib/Deque.mjs"

const carrinho = new Deque()

carrinho.insertBack("Arroz")
carrinho.insertBack("Feijão")
carrinho.insertFront("Macarrão")

carrinho.insertBack("Arroz")

console.log(carrinho.print())