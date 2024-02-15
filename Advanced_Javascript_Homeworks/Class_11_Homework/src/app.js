function Person(firstName, lastName, age) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.getFullName = function () {
            return `${firstName} ${lastName}`
        }
}

function Student(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))
    this.academyName = academyName,
        this.studentId = studentId,
        this.study = function () {
            console.log(`The student ${this.firstName} is studying in ${academyName}`);
        }
}

Person.prototype.acceptStudent = function (student) {
    if (student) {
        return student.academyName;
    }
    else {
        return `Invalid student`
    }
}

function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, 'Designer Academy', studentId))
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function () {
        console.log(`The student ${this.firstName} is doing an adobe exam!`);
    }

}
function CodeStudent(firstName, lastName, age, studentId, hasIndividualProject, hasGroupProject) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, `Coding Academy`, studentId))
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;
    this.doProject = function (type) {
        if (type === `individual`) {
            this.hasIndividualProject = true;
            console.log(`${this.firstName} is working on ${type} project`);
        }
        else if (type === `group`) {
            this.hasGroupProject = true;
            console.log(`${this.firstName} is working on ${type} project`);
        }
        else {
            console.log(`No group is added`);
        }
    };

}
function NetworkStudent(firstName, lastName, age, studentId, academyPart) {
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, `Network Academy`, studentId))
    this.academyPart = academyPart;
    this.attendCiscoExam = function () {
        console.log(`The student ${this.firstName} is doing a cisco exam!`);
    };

}

// ---------------------Call list--------------------------------

let studentOne = new Student('Mario', 'Milchevski', 30, 'SEDC', 2)
let studentTwo = new Student('Viktor', 'Apostolovski', 22, 'Semos', 3)

console.log(studentOne);
console.log(studentOne.getFullName());
studentOne.study();

console.log(studentOne.acceptStudent(studentOne));
console.log(studentTwo.acceptStudent(studentTwo));


//bonus 

let designStudentOne = new DesignStudent('Petre', 'Prlickov', 105, 1, true)
let codeStudentOne = new CodeStudent('Van', 'Gogh', 60, 2, false, false)
let networkStudentOne = new NetworkStudent('Van', 'Dam', 55, 1, 2)

console.log(designStudentOne);
designStudentOne.attendAdobeExam()
console.log(codeStudentOne);
codeStudentOne.doProject('individual')
console.log(networkStudentOne);
networkStudentOne.attendCiscoExam()

// it was in a hurry i hope i did well