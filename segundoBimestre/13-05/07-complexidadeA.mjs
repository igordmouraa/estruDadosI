/*
    O(1), porque a operação de acesso ao primeiro elemento do array é feita em tempo constante independente do tamanho do array
*/ 

const array = [5, 6, 7, 8, 9, 2, 3, 4, 1];

function example01(array){
    const inicio = performance.now();
    if (array.length === 0) return null;
    const elemento = array[3];
    const fim = performance.now();

    const memoriaPilhaMB = (array.length * 4) / (1024 * 1024);

    let memoriaTotalMB = "N/A";
    if(typeof process !== "undefined" && process.memoryUsage) {
        memoriaTotalMB = process.memoryUsage().heapUsed / 1024 / 1024
    };
    console.clear();
    console.log("--- Analise de Complexidade Iterativa O(1) ---");
    console.log("Tamanho da entrada:", array.length);
    console.log("Resultado: ", elemento);
    console.log("Tempo de Execução: ", fim - inicio, "ms");
    console.log("Memória estimada de pilha de chamada", memoriaPilhaMB, "mb");
    console.log("Memória total usada pelo processo: ", 
        typeof memoriaTotalMB === "number" ? memoriaTotalMB.toFixed(6) + "mb" : memoriaTotalMB 
    );
    console.log("--------------------------------------------");
    
}

example01(array);

/*
    O(log n), porque a cada iteração, valor de i multiplicado por 2, que significa que o número de iterações necessárias para que i atinja "n" e logaritmico em relação a "n"
*/

function exampleLogN(n){
    let i = 1
    while (i < n){
        console.log(i);
        i = i * 2;
        
    }
}

exampleLogN(10)

/*
    D(n), porque a função percorre todos os elementos do array de uma vez, realizando uma operação constante
*/

function exampleOn(array){  
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
        
    }
}
