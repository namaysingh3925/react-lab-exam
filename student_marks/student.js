const students = [
  { name: "Rahul", marks: [85, 78, 92] },
  { name: "Priya", marks: [58, 64, 70] },
  { name: "Arjun", marks: [95, 88, 90] },
  { name: "Sneha", marks: [45, 50, 40] },
  { name: "Kiran", marks: [72, 68, 74] }
];

function calculateTotal(marks) {
  return marks.reduce((sum, mark) => sum + mark, 0);
}

function calculateAverage(marks) {
  return calculateTotal(marks) / marks.length;
}

function showAllStudents() {

  const output = document.getElementById("output");

  output.innerHTML = students.map(student => {

    const total = calculateTotal(student.marks);
    const average = calculateAverage(student.marks);

    return `
      <div class="student-card">
        <h3>${student.name}</h3>
        <p><strong>Marks:</strong> ${student.marks.join(", ")}</p>
        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Average Marks:</strong> ${average.toFixed(2)}</p>
      </div>
    `;
  }).join("");
}

function showPassedStudents() {

  const passedStudents = students.filter(
    student => calculateAverage(student.marks) >= 60
  );

  document.getElementById("output").innerHTML =
    passedStudents.map(student => `
      <div class="student-card">
        <h3>${student.name}</h3>
        <p><strong>Marks:</strong> ${student.marks.join(", ")}</p>
        <p><strong>Average Marks:</strong> ${calculateAverage(student.marks).toFixed(2)}</p>
      </div>
    `).join("");
}

function showTopper() {

  const topper = students.reduce((top, current) =>
    calculateAverage(current.marks) >
      calculateAverage(top.marks)
      ? current
      : top
  );

  document.getElementById("output").innerHTML = `
    <div class="student-card">
      <h2>Topper</h2>
      <h3>${topper.name}</h3>
      <p><strong>Marks:</strong> ${topper.marks.join(", ")}</p>
      <p><strong>Total Marks:</strong> ${calculateTotal(topper.marks)}</p>
      <p><strong>Average Marks:</strong> ${calculateAverage(topper.marks).toFixed(2)}</p>
    </div>
  `;
}

function showClassAverage() {

  const totalAverage = students.reduce(
    (sum, student) => sum + calculateAverage(student.marks),
    0
  );

  const classAverage = totalAverage / students.length;

  document.getElementById("output").innerHTML = `
    <div class="student-card">
      <h2>Class Average</h2>
      <p><strong>Average Marks of Class:</strong> ${classAverage.toFixed(2)}</p>
    </div>
  `;
}

showAllStudents();
