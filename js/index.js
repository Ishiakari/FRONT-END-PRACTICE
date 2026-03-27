'const names = ["spongebob", "patrick", "squidward", "sandy", "mr. krabs"];'

'const jsonString = JSON.stringify(names);'
'console.log(jsonString);'

/*fetch("jsons/names.json")
    .then(response => response.json())
    .then(value => console.log(value));

const square = function(n){
    return n * n
}; */


const squarearrow = n => n * n;
console.log(squarearrow(5));