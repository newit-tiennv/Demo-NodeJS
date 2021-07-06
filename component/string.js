/**
 * ES5
 * Concatenate strings
 */

function name1(name, age) {
    return "Hi " + name + " " + age;
}
console.log(name1("Tien", 18)); // Hi Tien 18

/**
 * ES6
 * Concatenate strings with arrow function
 */

const name2 = (name, age) => `Hi ${name} ${age}`;
console.log(name2("Tien", 19)); // Hi Tien 19

/**
 * Export 
 */
export default function demoExport(name, age) {
    return `This is ${name}, ${age}`;
};
