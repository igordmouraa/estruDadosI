import Stack from "../lib/Stack.mjs"

const pilha2 = new Stack(3)

pilha2.push("Escreveu A")
pilha2.push("Escreveu B")
pilha2.push("Escreveu C")

pilha2.push("Escreveu D") // erro

pilha2.pop() // desfaz C
pilha2.pop() // desfaz B

console.log(pilha2.history())
