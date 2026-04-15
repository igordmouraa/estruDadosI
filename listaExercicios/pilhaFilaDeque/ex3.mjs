import Deque from "../lib/Deque.mjs"

const deque = new Deque(5)

deque.insertBack(1)
deque.insertBack(2)
deque.insertFront(0)
deque.insertBack(3)
deque.insertBack(4)

console.log(deque.print())

deque.insertBack(5) 