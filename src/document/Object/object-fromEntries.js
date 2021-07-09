/**
 * Returns a new object from an iterable of [key, value] pairs.
 * Các cặp này có thể trùng.
 */

const arr = new Map([['name', 'Tien'], ['age', 18], ['name', 'Susan']]);
const result = Object.fromEntries(arr);
console.log(result); //{ name: 'Susan', age: 18 }