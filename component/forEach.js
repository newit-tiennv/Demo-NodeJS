/**
 * Sử dụng khi không cần tạo ra mảng mới.(es6)
 */

var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

officers.forEach((e, i) => officers[i].id = e.id * 2);

console.log(officers);