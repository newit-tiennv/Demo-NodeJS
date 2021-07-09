/**
 * Có thể thay đổi value of object nhưng không thêm hoặc xoá.
 * Nó gần giống Object freeze.
 */

const objS = { name: "Honda", model: 4, year: 1991 };
Object.seal(objS);
objS.model = 2;
console.log(objS); //{ name: 'Honda', model: 2, year: 1991 }
delete objS.year;
console.log(objS); //{ name: 'Honda', model: 2, year: 1991 }. Can't delete.