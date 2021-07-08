/**
 * Object create
 * Creates a new object, using an existing object as the prototype of the newly created object.
 */

const car = {
    name: 'Honda',
    detail: function () {
        console.log(`This is ${this.name}, ${this.type} wheeler type.`);
    }
}

const newCar = Object.create(car);
newCar.name = "Suzuki";
newCar.type = 2;
newCar.detail(); //This is Suzuki, 2 wheeler type.

//Test undefined.
const newCar2 = Object.create(car);
newCar2.detail(); //This is Honda, undefined wheeler type.