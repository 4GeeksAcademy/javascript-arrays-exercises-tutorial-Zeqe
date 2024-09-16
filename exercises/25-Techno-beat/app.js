// Your code here
function lyricsGenerator(array) {
    let song = "";
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            count++;
            song += "Drop the bass ";
            if (count === 3) {
                song += "!!!Break the bass!!! ";
                count = 0;
            };
        } else{
            song += 'Boom ';
            count = 0;
        } 
    }
    return song.trim()
    }



// Don't change anything below this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))
