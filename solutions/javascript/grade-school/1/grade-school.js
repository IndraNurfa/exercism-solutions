export class GradeSchool {
  constructor() {
    this._students = [];
  }

  roster() {
    return [...this._students]
      .sort((a, b) => {
        if (a.grade !== b.grade) {
          return a.grade - b.grade;
        }
        return a.name.localeCompare(b.name);
      })
      .map(student => student.name);
  }

  add(name, grade) {
    if (this._students.some(student => student.name === name)) {
      return false;
    }

    this._students.push({ name, grade });
    return true;
  }

  grade(gradeNumber) {
    return this._students
      .filter(student => student.grade === gradeNumber)
      .map(student => student.name)
      .sort();
  }
}