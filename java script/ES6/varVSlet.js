var a = 10
let b = 20

function abc(){
    let a = 50
    var b = 40
    console.log(a);
    console.log(b);

    a = 90
    b = 80
}

console.log(a);
console.log(b);

abc()