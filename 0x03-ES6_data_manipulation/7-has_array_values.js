export default function hasValuesFromArray(set, array) {
  return array.filter((num) => (
    !set.has(num))).length === 0;
}
