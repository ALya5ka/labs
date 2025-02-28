//Задание 5.1
/*
Напишите функцию, принимающую на вход массив вещественных
чисел и возвращающую количество элементов, неравных своему
предыдущему.
*/
console.log("Задание 5.1");
function countDifferentElements(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            count++;
        }
    }
    return count;
}

let numbers = [1.5, 1.5, 2.0, 2.0, 3.0, 4.0, 4.0];
console.log(countDifferentElements(numbers));

//Задание 5.2
/*
Напишите функцию, принимающую на вход вещественную
прямоугольную матрицу и возвращающую одномерный массив,
состоящий из минимальных элементов соответствующих столбцов
матрицы.
*/
console.log("Задание 5.2")
function getMinColumnElements(matrix) {
    return matrix[0].map((_, colIndex) => {
        return Math.min(...matrix.map(row => row[colIndex]));
    });
}

let matrix = [
    [1.5, 2.0, 3.0],
    [4.0, 5.0, 1.0],
    [6.0, 7.0, 8.0]
];

console.log(getMinColumnElements(matrix));
