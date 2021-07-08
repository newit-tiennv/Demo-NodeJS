/**
 * Tạo ra 1 mảng mới.
 */

var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

const ids = officers.map((e) => e.id);

console.log(ids); //=> [20, 24, 56, 88]

