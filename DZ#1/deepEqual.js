function deepEqual(a, b) {
  if (a === b || (Number.isNaN(a) && Number.isNaN(b))) return true;

  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false;

  if (a.constructor !== b.constructor) return false;

  if (a instanceof Date) return a.getTime() === b.getTime();

  if (a instanceof Map) {

    if (a.size !== b.size) return false;

    for (const [ka, va] of a) {
      let found = false;
      
      for (const [kb, vb] of b) {
        if (deepEqual(ka, kb)) {
          if (!deepEqual(va, vb)) return false;
          found = true;
          break;
        }
      }

      if (!found) return false;
    }
    return true;
  }


  if (a instanceof Set) {

    if (a.size !== b.size) return false;
    
    for (const va of a) {
      let found = false;
      
      for (const vb of b) {
        if (deepEqual(va, vb)) {
          found = true;
          break;
        }
      }

      if (!found) return false;
    }

    return true;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const k of keysA) {
    if (!(k in b)) return false;
    if (!deepEqual(a[k], b[k])) return false;
  }

  return true;
}

module.exports = { deepEqual };
