export default function updateUniqueItems(map) {
  if (!(map instanceof Map) || map.size === 0) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key, newMap) => {
    if (value === 1) {
      newMap.set(key, 100);
    }
  });

  return map;
}
