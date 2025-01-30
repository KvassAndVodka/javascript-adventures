// concat()	joins two or more arrays and returns a result
const array1 = ['burger', 'fries', 'wings'];
const array2 = ['buritto', 'nachos'];
const newArray = array1.concat(array2);
console.log(newArray);

// includes() checks if an array contains a specified element
console.log(array1.includes('fries'));

// push() adds a new element to the end of an array and returns the new length of an array
const pushedArray = newArray.push('tacos');
console.log(pushedArray);
console.log(newArray);

// unshift() adds a new element to the beginning of an array and returns the new length of an array
const unshiftArray = newArray.unshift("what is your order bruh");
console.log(unshiftArray);
console.log(newArray);

// pop() removes the last element of an array and returns the removed element
const popExample = ['1', '2', '3', '5'];
popExample.pop();
console.log(popExample)

// shift() removes the first element of an array and returns the removed element
newArray.shift();
console.log(newArray);

// sort() sorts the elements alphabetically in strings and in ascending order
newArray.sort();
console.log(newArray);

// slice() selects the part of an array and returns the new array
console.log(newArray.slice(1,4));

// splice() removes or replaces existing elements and/or adds new elements
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
