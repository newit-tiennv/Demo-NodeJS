/**
 * Khoá một object. Không thể thay đổi hoặc xoá.
 */
const objF = { name: 'abc' };

Object.freeze(objF);
objF.name = "Tien";
console.log(objF.name); //abc
