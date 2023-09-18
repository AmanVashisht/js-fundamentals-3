// Create an object representing a car with properties like "make," "model," and "year." Write a function to 
// display all the properties of the car.

let carProperties={
    make:"India",
    model: "base model",
    year:2020
}

function displayProperty(carProperties){
    // console.log(Object.entries(carProperties))
    for (const keys in carProperties) {
        console.log(`${keys} : ${carProperties[keys]}`)
    }
    
}

displayProperty(carProperties)