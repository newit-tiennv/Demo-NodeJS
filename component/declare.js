
//Globally scope 
var color = "red";
console.log(color); // => "red"

//Block scope 
let animal = "dog";
console.log(animal); // => "dog"

if (true) {
    let username = "Tien";
    console.log(username); // => "Tien"
}

let animal = "horse"; //Error: Identifier 'animal' has already been declared
console.log(username) //Error: 'username' is not defined.

//Block scope and hoisting
/**
 * Do not change the value.( string, number, boolean, null and undefined)
 */

const _color = "red";
console.log(_color) // => "red"
_color = "blue"; // Error
const _color = "yellow"; // Error

/**
 * Changes in value.(object, function and array)
 */

const mobile = {
    color: "black",
    product: "Samsung"
}

mobile.color = "white";
console.log(mobile); // => {color:"white",product:"samsung"}
