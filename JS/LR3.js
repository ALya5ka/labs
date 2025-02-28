// Класс Mark
class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }

    toString() {
        return `${this.subject}: ${this.mark}`;
    }
}

// Класс Student
class Student {
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.marks = [];
    }

    addMark(mark) {
        this.marks.push(mark);
    }

    toString() {
        let marksList = this.marks.map((mark, index) => `  ${index + 1}. ${mark.toString()}`).join("\n");
        return `Фамилия: ${this.lastName}\nИмя: ${this.firstName}\nОценки:\n${marksList}`;
    }

    getAverageMark() {
        if (this.marks.length === 0) {
            return 0;
        }
        return (this.marks.reduce((sum, mark) => sum + mark.mark, 0) / this.marks.length).toFixed(2);
    }

    getMarksBySubject(subject) {
        return this.marks.filter(mark => mark.subject === subject);
    }

    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(mark => mark.subject !== subject);
    }
}

// Пример использования
let student = new Student("Петров", "Михаил");

let mathMark = new Mark("Математика", 5);
let physicsMark = new Mark("Физика", 4);
let informaticsMark = new Mark("Информатика", 5);

student.addMark(mathMark);
student.addMark(physicsMark);
student.addMark(informaticsMark);

console.log(student.toString());
console.log(`Средняя оценка: ${student.getAverageMark()}`);

let mathMarks = student.getMarksBySubject("Математика");
console.log("Оценки по математике:");
mathMarks.forEach(mark => console.log(mark.toString()));

student.removeMarksBySubject("Физика");
console.log(student.toString());