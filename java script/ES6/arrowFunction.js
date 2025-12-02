a = ()=>{
    console.log("A called")
}

b = (name,age)=>{
    console.log("B is called by"+name+"who is"+age+"years old");
}

square = n => n*n

a()
b("Nabhag",18)
console.log(square(5));