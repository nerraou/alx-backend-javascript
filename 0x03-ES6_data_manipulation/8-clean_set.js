export default function cleanSet(set, startString) {
  const strings = [];

  if (typeof startString !== 'string' || startString.length === 0 || !(set instanceof Set)) return '';
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      strings.push(value.slice(startString.length));
    }
  });
  return strings.join('-');
}
