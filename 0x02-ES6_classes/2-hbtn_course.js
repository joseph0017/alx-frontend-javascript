export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(a) {
    if (typeof a !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = a;
  }

  get length() {
    return this._length;
  }

  set length(a) {
    this._length = a;
  }

  get students() {
    return this._students;
  }

  set students(a) {
    this._students = a;
  }
}
