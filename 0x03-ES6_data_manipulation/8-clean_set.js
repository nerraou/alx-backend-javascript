export default function cleanSet(set, startString) {
  if (startString.length === 0) return '';
  const strings = [];

  set.forEach((value) => {
    const check = value.startsWith(startString);
    if (check) {
      strings.push(value.substring(`${startString.length}`));
    }
  });
  return strings.join('-');
}
