class Academy {
    constructor(academyName, startDate, endDate) {
        this.academyName = academyName,
            this.students = [],
            this.subjects = [],
            this.startDate = startDate,
            this.endDate = endDate,
            this.numberOfClasses = () => {
                return this.subjects.length * 10;

            }
    }

    addSubject(subject) {
        this.subjects.push(subject)
    }

    printStudents() {
        console.log(`Students enrolled in ${this.academyName}:`);
        this.students.forEach(student => {
            console.log(student.firstName, student.lastName);
        })
        console.log(`----------------------------------`);
    }

    printSubjects() {
        console.log(`Subjects offered by ${this.academyName}:`);
        this.subjects.forEach(subject => {
            console.log(subject.title);
        })
        console.log(`----------------------------------`);

    }
}

class Subject {
    constructor(title, isElective, academies) {
        this.title = title,
            this.numberOfClasses = 10,
            this.isElective = isElective,
            this.academies = academies,
            this.students = [],
            this.academies.forEach(academy => {
                academy.addSubject(this);
            })
    }
    overrideClasses(numberOfClasses) {
        if (numberOfClasses >= 3) {
            this.numberOfClasses = numberOfClasses;
        } else {
            console.log(`Least number of classes is 3`);
        }
    }
}


class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.completedSubjects = [],
            this.academy = null,
            this.currentSubject = null
    }

    startAcademy(academy) {
        this.academy = academy;
        academy.students.push(this)
    }
    startSubject(subject) {

        if (!this.academy) {
            console.log('The student is not enrolled in academy')
            return;
        }
        if (!this.academy.subjects.includes(subject)) {
            console.log('That subject does not exist in the academy');
            return;
        }
        if (this.currentSubject) {
            this.completedSubjects.push(this.currentSubject)
        }

        this.currentSubject = subject,
            subject.students.push(this)
    }
}

let Seavus = new Academy('Qinshift', new Date("2023-10-19"), new Date("2024-09-15T20:45:00"));
let Semos = new Academy('Semos', new Date("2023-10-19"), new Date("2024-09-15T20:45:00"));

let HTML = new Subject('HTML', false, [Seavus, Semos]);
let CSS = new Subject('CSS', false, [Seavus, Semos]);
let JS = new Subject('Javscript', false, [Seavus, Semos]);

let Mario = new Student('Mario', 'Milchevski', 30)
let Filip = new Student('Filip', 'Ficho', 18)
let Viktor = new Student('Viktor', 'Dimitrievski', 22)

// document.getElementById("academyName").textContent = Seavus.name;
// document.getElementById("startDate").textContent = Seavus.startDate.toLocaleDateString();
// document.getElementById("endDate").textContent = Seavus.endDate.toLocaleDateString();
// document.getElementById("numberOfClasses").textContent = Seavus.numberOfClasses;

// let subjectList = document.getElementById("subjectList");
// Seavus.subjects.forEach(subject => {
//     let li = document.createElement("li");
//     li.textContent = subject.title;
//     subjectList.appendChild(li);
// });

// let studentList = document.getElementById("studentList");
// Seavus.students.forEach(student => {
//     let li = document.createElement("li");
//     li.textContent = `${student.firstName} ${student.lastName}`;
//     studentList.appendChild(li);
// });

Mario.startAcademy(Seavus)
Mario.startSubject(HTML)
Mario.startSubject(CSS)
JS.overrideClasses(20)

Viktor.startAcademy(Semos)
Viktor.startSubject(HTML)
Viktor.startSubject(CSS)

Filip.startAcademy(Seavus)
Filip.startSubject(HTML)
Filip.startSubject(CSS)

Seavus.printStudents()
Semos.printStudents()

Seavus.printSubjects()
Semos.printSubjects()

console.log(Seavus);
console.log(JS);
console.log(Mario);
console.log(Viktor);