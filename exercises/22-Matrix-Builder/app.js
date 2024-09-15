// Your code here
function matrixBuilder(integer) {
    let arr = [];
    for (let i = 0; i < integer; i++) {
        let row = [];
        
        for (let j = 0; j < integer; j++) {
            row.push(Math.floor(Math.random() * 2));
        }

        arr.push(row);
    }

    return arr;

}


// Do not change anything from this line down
console.log(matrixBuilder(5))
