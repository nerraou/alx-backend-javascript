const initialvalue = 0;
export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    initialvalue,
  );
}
