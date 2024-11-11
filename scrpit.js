let studentCount = 1;

function addStudentForm() {
    studentCount++;
    const studentForms = document.getElementById('student-forms');
    const newStudentForm = document.createElement('div');
    newStudentForm.className = 'student-form';
    newStudentForm.id = `student-form-${studentCount}`;
    newStudentForm.innerHTML = `
        <label for="student-name-${studentCount}">Student Name:</label>
        <input type="text" id="student-name-${studentCount}" required>
        <label>Grades:</label>
        <input type="number" class="grade-input" id="grade-${studentCount}-1" min="0" max="100" required>
        <input type="number" class="grade-input" id="grade-${studentCount}-2" min="0" max="100" required>
        <input type="number" class="grade-input" id="grade-${studentCount}-3" min="0" max="100" required>
        <input type="number" class="grade-input" id="grade-${studentCount}-4" min="0" max="100" required>
        <input type="number" class="grade-input" id="grade-${studentCount}-5" min="0" max="100" required>
    `;
    studentForms.appendChild(newStudentForm);
}

function calculateGPAs() {
    const gpaResults = document.getElementById('gpa-results');
    const classGPAResult = document.getElementById('class-gpa-result');
    gpaResults.innerHTML = '';
    let totalClassGPA = 0;

    for (let i = 1; i <= studentCount; i++) {
        const studentName = document.getElementById(`student-name-${i}`).value;
        let totalGrades = 0;
        for (let j = 1; j <= 5; j++) {
            const grade = parseFloat(document.getElementById(`grade-${i}-${j}`).value);
            totalGrades += grade;
        }
        const gpa = totalGrades / 5;
        totalClassGPA += gpa;
        gpaResults.innerHTML += `<div class="gpa-result">${studentName}'s GPA: ${gpa.toFixed(2)}</div>`;
    }

    const classGPA = totalClassGPA / studentCount;
    classGPAResult.innerHTML = `Class GPA: ${classGPA.toFixed(2)}`;
}

