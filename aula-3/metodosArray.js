// //myFind
// function myFind(predicate) {
//     for(let i = 0; i < this.length; i++) {
//         const item = this[i]
//         if (predicate(item, i, this)) {
//             return item
//         }
//     }
// }

// Array.prototype.myFind = myFind

// const letras = ["a", "b", "c", "d", "e", "f", "g"]

// letras.__proto__.batata = "doce"

// //const result = letras.find((letra) => letra == "h")
// // (value: string, index: number, obj: string[]) => boolean



// const result = letras.myFind((l) => l == "d")

// console.log(result)
// console.log(resultFind)


// console.log(letras.myFind, "-", letras.batata)

// const outrasLetras = ["a", "b", "c", "d", "e", "f", "g"]

// console.log(outrasLetras.myFind, "-", outrasLetras.batata)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//myMap
function myMap(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        result.push(callback(item, i, this));
    }
    return result;
}

Array.prototype.myMap = myMap;

const multiplicados = numbers.myMap((num) => num * 4);
console.log("myMap: " + multiplicados);

//myFilter
function myFilter(predicate) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        const item = this[i];
        if (predicate(item, i, this)) {
            result.push(item);
        }
    }
    return result;
}

Array.prototype.myFilter = myFilter;

const pairs = numbers.myFilter((num) => num % 2 === 0);
console.log("myFilter: " + pairs);

//myReduce
function myReduce(callback, init) {
    let acumulador = init;
    let start = 0;

    if (init === undefined) {
        acumulador = this[0];
        start = 1;
    }

    for (let i = start; i < this.length; i++) {
        const item = this[i];
        acumulador = callback(acumulador, item, i, this);
    }

    return acumulador;
}

Array.prototype.myReduce = myReduce;

const sum = numbers.myReduce((acc, num) => acc + num, 0);
console.log("myReduce: " + sum);