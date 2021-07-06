
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

/**
 * Ex1
 * outside scope
 */
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 1000);
}
// => 3 3 3

/**
 * Ex2
 * scope từ lúc khai báo let => }. Qua vòng lặp mới thì tạo lại biến mới, giá trị mới.
 */
for(let i = 0; i<3;i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 1000);
}
// => 0 1 2


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
