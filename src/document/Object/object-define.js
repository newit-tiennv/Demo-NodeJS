/**
 * Định nghĩa một thuộc tính mới trực tiếp trên một đối tượng hoặc sửa đổi một thuộc tính hiện có trên một đối tượng và trả về đối tượng.
 * Property
 */

const obj1 = {};
Object.defineProperty(obj1, 'test', {
    value: 12,
    enumerable: false, //default
    configurable: false, //default
    writable: false, //default
});

obj1.test = 10; // Không thể set.
console.log(obj1.test); //12

/**
 * Thêm các thuộc tính được đặt tên được mô tả bởi các bộ mô tả đã cho vào một đối tượng.
 * Properties
 */

const obj2 = {};
Object.defineProperties(obj2, {
    'property1' : {
        value: 11,
        writable: true
    },
    'property2': {
        value: 111,
        writable: false
    }
});
console.log(obj2.property2); //111
