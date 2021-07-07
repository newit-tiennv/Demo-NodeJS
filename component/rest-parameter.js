
/**
 * REST
 */
var arr = ["one", "two", "three", "four", "five"];

const [value1, value2, value3, ...rest] = arr;

const myFunc = (e) => e;
const myFunc1 = (e) => {
    return e.filter(item => item).join(" ");
}

console.log(myFunc(rest)); // [ 'four', 'five' ]
console.log(myFunc1(rest)); // four five

const myFunc2 = (...anArray) => {
    return anArray;
}
console.log(myFunc2(arr)); // [["one", "two", "three", "four", "five"]]

const arr1 = ['said', 20, 'JavaScript enthusiast', 'Hi', 'Said', 'How are you?'];

const Func = (...anArray) => {
    return anArray;
}

console.log(Func(arr1)); // [[ 'said', 20, 'JavaScript enthusiast', 'Hi', 'Said', 'How are you?' ]]

/**
 * Default parameter values
 */

const sum = (x, y = 5, z = 12) => {
    return x + y + z;
}

console.log(sum(2)); //19
console.log(sum(12, 2)); //26

/**
 * Destructuring Assignment
 */

function f([name, val]) {
    console.log(name, val)
}
function g({ name: n, val: v }) {
    console.log(n, v)
}
function h({ name, val }) {
    console.log(name, val)
}
f(["bar", 42])
g({ name: "foo", val: 7 })
h({ name: "bar", val: 42 })