function Maior(numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        console.log("O maior número é:", numero1);
    } else if (numero2 > numero1 && numero2 > numero3) {
        console.log("O maior número é:", numero2);
    } else if (numero3 > numero1 && numero3 > numero2) {
        console.log("O maior número é:", numero3);
    } else {
        console.log("Todos os números são iguais.");
    }
}

function ordenarNumeros(numero1, numero2, numero3) {
    let numeros = [numero1, numero2, numero3];
    numeros.sort((a, b) => a - b);
    console.log("Números em ordem crescente:", numeros);
    return numeros;
}

function Palindromo(palavra) {
    let invertida = palavra.split("").reverse().join("");
    if (palavra.toUpperCase() === invertida.toUpperCase()) {
        console.log(`"${palavra}" é um palíndromo.`);
    } else {
        console.log(`"${palavra}" NÃO é um palíndromo.`);
    }
}

function Triangulo(numero1, numero2, numero3) {
    let lados = [numero1, numero2, numero3].sort((a, b) => a - b);
    let [a, b, c] = lados;

    if (a + b <= c) {
        console.log("Esses valores NÃO formam um triângulo.");
    } else if (a === b && b === c) {
        console.log("Triângulo EQUILÁTERO.");
    } else if (a === b || b === c || a === c) {
        console.log("Triângulo ISÓSCELES.");
    } else {
        console.log("Triângulo ESCALENO.");
    }
}

let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let numero3 = Number(prompt("Digite o terceiro número:"));
let string = String(prompt("Digite uma palavra (palíndromo):"));

Maior(numero1, numero2, numero3);
ordenarNumeros(numero1, numero2, numero3);
Palindromo(string);
Triangulo(numero1, numero2, numero3);

