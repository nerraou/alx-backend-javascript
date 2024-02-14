interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

type Subjects = "Math" | "History";

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }

  getCoffeeBreak() {
    return "Cannot have a break";
  }

  workTeacherTasks() {
    return "Getting to work";
  }
}

function createEmployee(
  salary: string | number
): DirectorInterface | TeacherInterface {
  if (typeof salary == "number" && salary < 500) {
    return new Teacher();
  }

  return new Director();
}

function isDirector(employee: unknown): employee is DirectorInterface {
  return employee instanceof Director;
}

function executeWork(employee: DirectorInterface | TeacherInterface) {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

function teachClass(todayClass: Subjects) {
  if (todayClass == "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}
