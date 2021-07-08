/**
 * Object assign
 * Copy, clone hoặc nối nhiều object lại với nhau.
 */

 var obj1 = { a: 1, b: 2, c: 3 };
 var obj2 = { b: 5, d: 6 };
 var obj3 = { e: 11 };
 const n1 = 12;
 const str1 = 'xyz';
 
 //Merger duplicate properties
 const obj4 = Object.assign({}, obj1, obj2);
 console.log(obj4); //{ a: 1, b: 5, c: 3, d: 6 }
 
 //Clone from object.
 const obj5 = Object.assign({}, obj2);
 console.log(obj5); //{ b: 5, d: 6 }
 
 //copy the values from another object:
 Object.assign(obj3, obj2);
 console.log(obj3); //{ e: 11, b: 5, d: 6 }
 
 // No support null and undefined
 const result1 = Object.assign({}, str1, null, n1, undefined);
 console.log(result1); //{ '0': 'x', '1': 'y', '2': 'z' }