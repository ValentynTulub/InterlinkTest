function getStudents() {
    return [
        {fullName: "Ivan V.", grade: 80},
        {fullName: "John S.", grade: 75}
    ];
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

function loadStudents() {
    showStudents(getStudents());
}

window.onload = loadStudents;