export default function cleanSet(set, startString) {
  const strings = [];

  if (startString.length === 0 || typeof startString !== 'string') return '';
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      strings.push(value.slice(startString.length));
    }
  });
  return strings.join('-');
}
