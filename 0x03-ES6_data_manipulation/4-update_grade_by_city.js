export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  return studentList
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: (
        newGrades.find((grade) => grade.studentId === student.id)
        || defaultGrade
      ).grade,
    }));
}
