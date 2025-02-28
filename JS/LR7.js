class Student {
    constructor(name, averageGrade) {
        this.name = name;
        this.averageGrade = averageGrade;
    }
}

function shellSort(students) {
    let gap = Math.floor(students.length / 2);

    while (gap > 0) {
        for (let i = gap; i < students.length; i++) {
            let temp = students[i];
            let j = i;

            // Сдвигаем элементы, которые больше текущего, на место temp
            while (j >= gap && students[j - gap].averageGrade > temp.averageGrade) {
                students[j] = students[j - gap];
                j -= gap;
            }

            // Помещаем temp на его место
            students[j] = temp;
        }

        // Уменьшаем gap для следующей итерации
        gap = Math.floor(gap / 2);
    }

    return students;
}

const students = [
    new Student('Владимир', 4.7),
    new Student('Пётр', 3.9),
    new Student('Александр', 4.5),
    new Student('Сергей', 3.6),
    new Student('Антон', 4.0),
    new Student('Алексей', 4.4),
    new Student('Дарья', 3.7),
    new Student('Анастасия', 4.8),
    new Student('Фёдор', 3.2),
    new Student('Елизавета', 4.6),
    new Student('Иван', 4.3),
    new Student('Игорь', 3.9),
    new Student('Тимур', 4.9),
    new Student('Константин', 3.2),
    new Student('Елена', 4.1),
];

// Сортировка массива
const sortedStudents = shellSort(students);

console.log("Отсортированный массив студентов по средней оценке:");
sortedStudents.forEach(student => {
    console.log(`${student.name}: ${student.averageGrade}`);
});