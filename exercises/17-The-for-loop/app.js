let myArray = [2323, 4344, 2325, 324413, 21234, 24531, 2123, 42234, 544, 456, 345, 42, 5445, 23, 5656, 423];
let sum = 0;
// Your code here
for (let element of myArray) {
    sum += element;
}
let average = sum / myArray.length;
console.log(average)