import Stack from "../lib/Stack.mjs"

const pilha = new Stack(10)

pilha.push("Google")
pilha.push("YouTube")
pilha.push("GitHub")

pilha.pop()
pilha.pop()


console.log(pilha.history()) 