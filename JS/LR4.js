class Figure {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    getCenter() {
        return `(${this.#x}, ${this.#y})`;
    }

    square() {
        throw new Error("Метод должен быть переопределён в дочернем классе");
    }
}

class Circle extends Figure {
    #r;

    constructor(x, y, r) {
        super(x, y);
        this.#r = r;
    }

    square() {
        return (Math.PI * (this.#r ** 2)).toFixed(2);
    }
}

class Rectangle extends Figure {
    #h;
    #w;

    constructor(x, y, h, w) {
        super(x, y);
        this.#h = h;
        this.#w = w;
    }

    square() {
        return this.#h * this.#w;
    }
}

// Создание экземпляров
let circle = new Circle(0, 0, 5);
let rectangle = new Rectangle(1, 1, 4, 6);

// Вывод информации
console.log(`Круг: центр ${circle.getCenter()}, площадь ${circle.square()}`);
console.log(`Прямоугольник: центр ${rectangle.getCenter()}, площадь ${rectangle.square()}`);
