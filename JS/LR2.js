//Задание 2.1
console.log("Задание 2.1");

function productOfTwoMax(a, b, c) {
    let max1 = Math.max(a, b);
    let max2 = Math.max(Math.min(a, b), c);
    
    return max1 * max2;
}

let a = Number(prompt("Введите целое число a: "))
let b = Number(prompt("Введите целое число b: "))
let c = Number(prompt("Введите целое число c: "))

console.log("Произведение двух максимальных чисел:", productOfTwoMax(a, b, c));

//Задание 2.2
console.log("Задание 2.2");

function printInfo(name, rank = 'рядовой') {
    console.log(`Имя: ${name}, Звание: ${rank}`);
}

// Передача 1 параметра
printInfo('Иван');

//Передача 2 параметров
printInfo('Петр', 'лейтенант');

//Задание 2.3
console.log("Задание 2.3");

function callFunction(func, ...args) {
    return func(...args);
}

function multiply(a, b) {
    return a + b;
}

function circleArea(radius) {
    return (Math.PI * radius ** 2).toFixed(2);
}

console.log("Произведение чисел 5 и 10 равно:", callFunction(multiply, 5, 10));
console.log("Площадь круга радиусом 10 примерно равна:", callFunction(circleArea, 10));

//Задание 2.4
console.log("Задание 2.4");
function getExpression(num) {
    if (num % 2 === 0) {
        return x => x ** 2;
    } else {
        return x => x ** 3;
    }
}

let evenExpression = getExpression(10);
let oddExpression = getExpression(11);

console.log("Пять в квадрате равно", evenExpression(5));
console.log("Пять в кубе равно", oddExpression(5));

//Задание 2.5
console.log("Задание 2.5");
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else if (n < 0) {
        throw new Error("Факториал не определён для отрицательных чисел");
        //console.log("Факториал не определён для отрицательных чисел")
    } else {
        return n * factorial(n - 1);
    }
}

console.log("Факториал 5 равен:", factorial(5));
console.log(factorial(-2));
//console.log("Факториал -2 равен:", factorial(-2));