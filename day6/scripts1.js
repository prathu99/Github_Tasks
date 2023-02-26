// Convert the UML diagram to Typescript class. - use number for double

class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius
        this.color = color
    }

    getRadius() {
        return this.radius
    }

    setRadius() {
        this.radius = this.radius
    }

    getColor() {
        return this.color
    }

    setColor() {
        this.color = this.color
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    getCircumference() {
        return 2 * Math.PI * this.radius
    }


}

let circle1 = new Circle(4, "blue")
console.log(circle1.getColor())
console.log(circle1.getArea())
console.log(circle1.getCircumference())
