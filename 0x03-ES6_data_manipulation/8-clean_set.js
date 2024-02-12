export default function cleanSet(set, startString) {
  if (startString.length === 0 || typeof startString !== 'string') return '';
  const strings = [];

  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      strings.push(value.substring(startString.length));
    }
  });
  return strings.join('-');
}
