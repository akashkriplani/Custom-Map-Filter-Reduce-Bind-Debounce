// Custom Map
Array.prototype.customMap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
};
console.log([1, 2, 3].customMap((x) => x*2)); // [2, 4, 6]

// Custom filter
Array.prototype.customFilter = function(callback) {
    const filterArr = [];
    for(let index = 0; index<this.length; index++) {
        if(!!callback(this[index], index, this)) {
            filterArr.push(this[index]);
        }
    }
    return filterArr;
};

const names = ['John', 'Jack', 'Joey'];
const filterNames = names.customFilter(name => name !== 'Joey');
console.log(filterNames); // [ 'John', 'Jack' ]

Array.prototype.customReduce = function(callback, accumulator) {
    if(this.length < 1) {
        throw new Error("Array is Empty")
    }

    if(!accumulator) {
        if(typeof this[0] === "string") {
            accumulator = '';
        } else if(typeof this[0] === "number") {
            accumulator = 0;
        }
    }

    for(let index = 0; index < this.length; index++) {
        accumulator = callback(accumulator, this[index]);
    }
    return accumulator;
}

const numbers = [1, 2, 3, 4];
const statment = numbers.customReduce((acc, ele) => acc + ele);
console.log(statment); // 10

// Custom dedounce
const customDebounce = (func, delay) => {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
} 

// To make this work add a HTML file with input field and uncomment
// the below code

// let input = document.getElementById('input');

// input.addEventListener('keyup', customDebounce(function() {
// 	console.log(input.value);
// }, 300));
