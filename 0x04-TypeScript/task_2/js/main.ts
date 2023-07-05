interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    const msg = 'Working from home';
    return msg;
  }
  getCoffeeBreak(): string {
    const msg = 'Getting a coffee break';
    return msg;
  }
  workDirectorTasks(): string {
    const msg = 'Getting to director tasks';
    return msg;
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    const msg = 'Cannot work from home';
    return msg;
  }
  getCoffeeBreak(): string {
    const msg = 'Cannot have a break';
    return msg;
  }
  workTeacherTasks(): string {
    const msg = 'Getting to work';
    return msg;
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher;
  } else {
    return new Director;
  }
}

function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
  if (employee instanceof Director) {
    return employee.workDirectorTasks()
  } else {
    return employee.workTeacherTasks()
  }
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects):string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

console.log(teachClass('Math'));

console.log(teachClass('History'));

// console.log(executeWork(createEmployee(200)));

// console.log(executeWork(createEmployee(1000)));


// const emp = createEmployee(10)

// console.log(emp)