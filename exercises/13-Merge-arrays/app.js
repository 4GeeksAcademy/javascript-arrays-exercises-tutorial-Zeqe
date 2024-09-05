let chunkOne = ['Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell'];
let chunkTwo = ['Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    // Your code here
    Array.prototype.push.apply(newArray, firstArray);
    Array.prototype.push.apply(newArray, secondArray);

    return newArray
}

console.log(mergeArrays(chunkOne, chunkTwo));
