export default function hasValuesFromArray(set, array) {
  return array.every((tmp) => set.has(tmp));
}
