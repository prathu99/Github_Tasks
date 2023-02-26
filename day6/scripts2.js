//3. Write a “person” class to hold all the details.
//4. write a class to calculate the uber price.

class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}


class Uber {
    constructor(distance, time, passengers) {
        this.distance = distance;
        this.time = time;
        this.passengers = passengers;
    }

    calculatePrice() {
        let baseFare = 2.5;
        let timeFare = 0.35 * this.time;
        let distanceFare = 1.75 * this.distance;
        let passengerFare = 0.8 * this.passengers;

        let totalFare = baseFare + timeFare + distanceFare + passengerFare;

        return totalFare.toFixed(2);
    }
}


let person = new Person("XYZ BCW", 25, "123 lane");
let uber = new Uber(10, 20, 4);
let price = uber.calculatePrice();

console.log("Name:", person.name);
console.log("Address:", person.address);
console.log("Price:", "$" + price);