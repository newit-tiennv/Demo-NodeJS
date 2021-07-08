/**
 * Có thể nhận function truyền vào là 1 tham số.
 */

const check = (a) => a > 5;
var arr = [1,2,3,4,5,6,7,8];
const result = arr.filter(check);
console.log(result);