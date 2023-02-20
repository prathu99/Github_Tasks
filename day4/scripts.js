//1. How to compare two JSON have the same properties without order?
//a. let obj1 = { name: "Person1", age: 5 }
//b. let obj2 = { age: 5, name: "Person1" }

let obj1 = { name: "Person1", age: 5 }
let obj2 = { age: 5, name: "Person1" }


function compare() {
    if (obj1.age == obj2.age && obj1.name == obj2.name) {
        return true
    } else {
        return false
    }
}

console.log(compare())
