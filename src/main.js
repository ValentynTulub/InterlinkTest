let studentsURL = "http://localhost:3000/students";

function loadStudents() {
    getStudents().then(showStudents);
}

window.onload = function () {
    let form = document.getElementById("addStudentForm");
    form.addEventListener("submit", ev => {
        ev.preventDefault();
        let name = document.getElementById("nameInput").value;
        let grade = document.getElementById("gradeInput").value;
        addStudent({fullName: name, grade: grade}).then(loadStudents);
    });

    loadStudents();
};

function getStudents() {
    return fetch(studentsURL).then(r => r.json());
}

function showStudents(students) {
    let studentsList = document.getElementById("students");
    let template = document.getElementById("template").content;

    studentsList.innerHTML = "";
    for (let student of students) {
        let studentTemplateClone = template.querySelector(".student").cloneNode(true);

        updateStudentTemplate(studentTemplateClone, student);
        studentsList.appendChild(studentTemplateClone);
    }
}

function updateStudentTemplate(template, student) {
    let studentName = template.querySelector(".studentName");
    studentName.innerText = student.fullName;
    let studentGrade = template.querySelector(".grade");
    studentGrade.innerText = student.grade;
}

function addStudent(student) {
    return fetch(studentsURL, {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}



