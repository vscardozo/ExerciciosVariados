function somaPares(array) {
  return array.reduce((acc, num) => {
    if (num % 2 === 0) {
      return acc + num;
    }
    return acc;
  }, 0);
}

function palavrasComMaisDe4Letras(array) {
  return array.filter(palavra => palavra.length > 4);
}

function contarNumero(array, numero) {
  return array.reduce((contador, num) => {
    if (num === numero) {
      return contador + 1;
    }
    return contador;
  }, 0);
}

function multiplicarArray(array, multiplicador) {
  return array.map(num => num * multiplicador);
}

function inverterPalavras(frase) {
  return frase.split(' ').reverse().join(' ');
}

let numeros = [2,10,12, 5, 3];
console.log(somaPares(numeros))