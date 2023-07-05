var student1 = {
    firstName: 'Mikasa',
    lastName: 'Ackerman',
    age: 24,
    location: 'Scouts'
};
var student2 = {
    firstName: 'Eren',
    lastName: 'yeager',
    age: 26,
    location: 'Wall Maria'
};
var studentsList = [student1, student2];
var table = document.createElement("table");
document.body.appendChild(table);
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var nameCell = row.insertCell();
    var locationCell = row.insertCell();
    nameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});
