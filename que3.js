// Write a program that takes an object as input and returns the number of properties it has.

let obj={
    one: 1,
    two:2,
    three:3
}

console.log(obj.length)

function count(obj){
    console.log(Object.keys(obj).length)
}

count(obj)