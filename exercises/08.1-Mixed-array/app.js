let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
let new_arr = []
// Your code here
for (let i = 0; i < mix.length; i++) {
    new_arr.push(typeof mix[i]);    
}
console.log(new_arr)