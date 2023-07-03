export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((loc) => (
      loc.location === city
    ));
  }
}
