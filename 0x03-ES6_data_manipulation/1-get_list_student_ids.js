export default function getListStudentIds(studentIds) {
  if (Array.isArray(studentIds)) {
    return studentIds.map((studentId) => (
      studentId.id
    ));
  }
  return [];
}
