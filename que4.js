// Develop a program that accepts an object and a property name, and checks if the object has the specified 
// property.

let student={
    name: "Abhishek",
    age: 26,
    grade: "B"
}

function check(student,property){
    console.log(student.hasOwnProperty("name"))
}

check(student);