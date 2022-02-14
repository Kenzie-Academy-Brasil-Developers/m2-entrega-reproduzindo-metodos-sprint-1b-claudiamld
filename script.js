// 1 - todo método recebe um array e/ou uma função callback
//2 - let a descrição
// 3 - retorna um array novo
// 4 - o que o método retorna
// 1 passo - definir o que a função recebe
// 2 passo - observar o que o método retorna

// ATENÇÃO A FUNÇÃO JOIN --> FUNCIONA, PORÉM NÃO DA MANEIRA DESEJADA

let numbers = [1, 2, 3, 4, 5, 8, 4]

//FUNÇÃO MAP
function callbackMap(elem, indice, array) {
   return elem + 2
}

function newMap(array, callback) {
    let newArr = [];
    for(let index = 0; index < array.length; index++) {
        let novoElemento = callback(array[index], index, array)
        newArr.push(novoElemento)
    }
    return newArr
}

console.log(newMap(numbers, callbackMap));

//FUNÇÃO FOREACH
function callbackForEach(elem, index, array) {
    return elem * 2
}

function newForEach(array, callback) {
    let newArr = []
    for(let i = 0; i < array.length; i++) {
        let output = callback(array[i], i, array)
        newArr.push(output)
    }
    return newArr
}

console.log(newForEach(numbers, callbackForEach));

//FUNÇÃO SOME
function callbackSome(elem, index, array) {
    let result = false
    if(elem < 5) {
        result = true
    }
    return result
}

function newSome(array, callback) {
    let output;
    let isTruthy = false
    for(let i = 0; i < array.length; i++) {
        if(!isTruthy) {
            output = callback(array[i], i, array)
            if(output === true) {
                isTruthy = true
            }
        }
    }
    return output
}

console.log(newSome(numbers, callbackSome));

//FUNÇÃO FIND
    // 1 - retorna o valor do primeiro elemento do array que satisfizer a função de teste provida
    // 2 - caso contrário, retorna undefined
    // 3 - recebe uma callback --> element, index, array

function callbackFind(elem, index, array) {
    let result = array[0]
    if(elem > 6) {
        result = elem
    } else {
        result = undefined
    }
    return result
}

function newFind(array, callback) {
    let output;
    let outputFalsy = false;
    for(let i = 0; i < array.length; i++) {
        if(!outputFalsy)
            output = callback(array[i], i, array)
            if(output !== undefined) {
                outputFalsy = true
            }
        }
    return output
}

console.log(newFind(numbers, callbackFind));


// FUNÇÃO FINDINDEX

let arrFruits = ['banana', 'uva', 'pera', 'morango']

function callbackFindIndex(elem, index, array) {
    let result = array[0]
    if(elem  === 'pera'){
        result = index
    } 
    else {
        result = -1
    }
    return result
}

function newFindIndex(array, callback) {
    let output;
    let outputFalsy = false;
    for(let i = 0; i < array.length; i++) {
        if(!outputFalsy) {
            output = callback(array[i], i, array)
            if(output !== -1) {
                outputFalsy = true
            }
        }
    }
    return output
}

console.log(newFindIndex(arrFruits, callbackFindIndex));

//FUNÇÃO EVERY

function callbackEvery(elem, index, array) {
    let result = false;
    if(elem < 10) {
        result = true
    } 
    return result
}

function newEvery(array, callback) {
    let output;
    for(let i = 0; i < array.length; i++) {
        output = callback(array[i], i, array)
    }
    return output
}

console.log(newEvery(numbers, callbackEvery));

//FUNÇÃO FILTER
    // 1 - cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
    // 2 - recebe uma callback --> element, index, array

function callbackFilter(elem, index, array) {
    let result = false
    if(elem >= 5) {
        result = true
    } 
    return result
}

function newFilter(array, callback) {
    let output;
    let newArr = []
    let isTruthy = false
    for(let i = 0; i < array.length; i++) {
        if(!isTruthy) {
            output = callback(array[i], i, array)
            if(output === true) {
                newArr.push(array[i])
            }
        }
    }
    return newArr
}

console.log(newFilter(numbers, callbackFilter));

//FUNÇÃO JOIN
    //1 - junta todos os elementos de um array e transforma em uma string e retorna esta string
    //2 - se arr.length é 0, uma string vazia é retornada

function callbackJoin(elem, index, array) {
    return elem
}

function newJoin(array, callback) {
    let output;
    let newArr = []
    for(let i = 0; i < array.length; i++) {
        output = callback(array[i], i, array)
        newArr.push(output)
    }
    return `${newArr}`
}

console.log(newJoin(numbers, callbackJoin));

//FUNÇÃO CONCAT

function newConcat(value1, value2) {
    let newArr = [];
    for(let i = 0; i < value1.length; i++) {
        newArr.push(value1[i])
    }
    for(let i = 0; i < value2.length; i++) {
        newArr.push(value2[i])
    }
    return newArr
}

console.log(newConcat(numbers, arrFruits));

//FUNÇÃO INCLUDES
    // 1 - verifica se um array contém um determinado elemento
    // 2 - retorna true ou false
    // 3 - recebe o elemento a buscar e a posição de onde a busca se iniciará; por padrão, 0.

function newIncludes(array, elem) {
    let result = false;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === elem) {
            result = true
        }
    }
    return result
}

console.log(newIncludes(arrFruits, 'uva'));

function callbackReduce(acumulador, valorAtual, array) {
    let result = acumulador +valorAtual
    return result
}

function newReduce(array, callback) {
    let output;
    let total = 0;
    for(let i = 1; i < array.length; i++) {
        total += Number(array[i -1])
        output = callback(total, array[i], array)
    }
    return output
}

console.log(newReduce(numbers, callbackReduce));

let arrActors = ['Jamie Foxx', 'Leonardo Dicaprio', 'Jared Leto', 'Christian Bale', 'Jared Leto']

//FUNÇÃO INDEXOF
function newIndexOf(elem, array, index) {
    let result;
    let isTruthy = false;
    for(let i = 0; i < array.length; i++) {
        if(isTruthy === false){
            if(elem === array[i]) {
                result = [i]
                isTruthy = true
            }
        }
    }
    return result
}

console.log(newIndexOf('Jared Leto', arrActors));