interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: 'Mikasa',
  lastName: 'Ackerman',
  age: 24,
  location: 'Scouts'
}

const student2: Student = {
  firstName: 'Eren',
  lastName: 'yeager',
  age: 26,
  location: 'Wall Maria'
}

const studentsList: Student[] = [student1, student2]

const table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();
  nameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});