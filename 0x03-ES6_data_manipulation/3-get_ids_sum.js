export default function getStudentIdsSum(array) {
  const start = 0;
  const sumIds = array.reduce((accumulator, currentValue) => accumulator + currentValue.id, start);
  return sumIds;
}
