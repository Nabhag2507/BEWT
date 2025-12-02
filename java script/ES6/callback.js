function first(name,second){
    console.log("Your name is",name);
    second("Sorathiya")
}
function second(surname){
    console.log("Your surname is ",surname);
}

first("Nabhag", second)
