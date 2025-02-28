//Задание 6.1
/*
Реализуйте функцию для поиска в двух заданных массивах элементов,
которые присутствуют в обоих массивах. Используйте Set.
*/
console.log("Задание 6.1")
function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const commonElements = arr2.filter(element => set1.has(element));
    return commonElements;
}

// Пример использования
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2));

//Задание 6.2
/*
Реализуйте функцию, которая подсчитывает количество вхождений
каждого элемента в массиве. Используйте Map.
*/
console.log("Задание 6.2")
function countOccurrences(arr) {
    const occurrences = new Map();
    arr.forEach(element => {
        occurrences.set(element, (occurrences.get(element) || 0) + 1);
    });
    return occurrences;
}

const array = ['tomato', 'cherry', 'pear', 'pear', 'cherry', 'pear'];
console.log(countOccurrences(array));

//Задание 6.3
/*
В массиве студентов подсчитать число обучающихся в самой большой
группе. Номер группы – свойство класса Student типа string.
*/
console.log("Задание 6.3")
class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
}

function findLargestGroup(students) {
    const groupCounts = new Map();
    students.forEach(student => {
        groupCounts.set(student.group, (groupCounts.get(student.group) || 0) + 1);
    });

    let maxCount = 0;
    let largestGroup = '';

    for (const [group, count] of groupCounts) {
        if (count > maxCount) {
            maxCount = count;
            largestGroup = group;
        }
    }

    return { largestGroup, maxCount };
}

const students = [
    new Student('Misha', '11'),
    new Student('Misha', '12'),
    new Student('Grisha', '12'),
    new Student('Sasha', '12'),
    new Student('Vitya', '12'),
    new Student('Vasya', '11'),
    new Student('Nikita', '11')
];

const result = findLargestGroup(students);
console.log(`Самая большая группа: ${result.largestGroup}, Количество студентов: ${result.maxCount}`);