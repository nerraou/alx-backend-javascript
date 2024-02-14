interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  age: 25,
  firstName: "Nouhayla",
  lastName: "Erraou",
  location: "Morocco",
};
const student2: Student = {
  age: 12,
  firstName: "Hidaya",
  lastName: "Erraou",
  location: "Morocco",
};

const studentsList: Student[] = [student1, student2];

function tableCreate() {
  const body = document.body;
  const table = document.createElement("table");
  table.style.width = "50%";
  table.style.border = "1px solid black";

  studentsList.forEach((student) => {
    const tr = table.insertRow();

    const tdName = tr.insertCell();
    const tdLocation = tr.insertCell();

    tdName.appendChild(document.createTextNode(student.firstName));
    tdName.style.border = "1px solid black";

    tdLocation.appendChild(document.createTextNode(student.location));
    tdLocation.style.border = "1px solid black";
  });

  body.appendChild(table);
}

tableCreate();
