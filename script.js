// Para declarar o array colocamos colchetes []
let frutas = ['morango', 'banana', 'maracuja', 'coco']
// Para acessar um item em especifico, colocamos o numero dele
frutas[1] = 'coquinho'
// Para ver o comprimento de um array usamos o length
console.log(frutas.length)

// pop() push()
// Pop usamos para retirar o ultimo
// push usamos para adicionar itens no final do array
frutas.pop()
frutas.push("graviola", 'goiaba', 'carambola', 'limao')
console.log(frutas)

//.slice()
console.log(frutas.slice(2, 4))
    
// unshift e shift
// Shift a gente usa para retirar o primeiro elemento
// unshift a gente usa para adicionar elementos no começo
frutas.shift()
frutas.unshift("amora", 'ameixa')
console.log(frutas)


// Copia de variavel
let aluno = "Durvaldo"
let aluno2 = aluno
aluno2 = 'Breno'

console.log(aluno)

// copia de array (de maneira errada, pois eles ficam com a mesma referencia)
let frutas2 = frutas
frutas2.push("abacate", 'pera', 'bergamota')
console.log(frutas)

// Copia do array de maneira correta
let frutasCopia = [...frutas]
frutasCopia.push("caja", 'abobrinha', 'pepino', 'tomate')
console.log(frutas)

// percorrer um array
// for

for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
}

// Metodos importantes
// map - mapear os itens 
let numeros = [13, 22, 14, 25]
let dobrados = numeros.map((numero) =>  numero * 2)
console.log(dobrados)
console.log(numeros)

// filter - filtrar itens
let idades = [12, 18, 17, 42, 38, 14, 3, 5, 15, 67]
let motoristas = idades.filter((idade) => idade >= 18)
console.log(motoristas)

// find

let procurado = idades.find((idade) => idade > 40)
console.log(procurado)
// undefined é quando eu não achei 
let frutaAchada = frutas.find((fruta) => fruta == 'Goiaba')
console.log(frutaAchada)

// reduce
let valores = [13, 500, 300, 550, 50, 27, 0.50, 750.24]
let valorInicial = 0

const doacaoTotal = valores.reduce(
    (montante, doacaoAtual) => montante + doacaoAtual,
    valorInicial,
);
console.log(doacaoTotal)

// findIndex acha o index, mas se não achar nada ele da como -1
const goiaba = frutas.findIndex((fruta) => fruta == 'Goiaba')
console.log(goiaba)

// some ele retorna true se pelomenos 1 passar no teste
const valores2 = [2, 4, 8, 7]
const algumEImpar = valores2.some((n) => n % 2 !== 0)
console.log(algumEImpar)

// every ele retorna true se todos os itens passarem no teste
const todosSaoImpar = valores2.every((n) => n % 2 !== 0)
console.log(todosSaoImpar)