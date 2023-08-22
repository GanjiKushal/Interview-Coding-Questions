function countRotationsToMatch(A, B) {
  if (A.length !== B.length) {
    return -1;
  }

  const n = A.length;
  for (let i = 0; i < n; i++) {
    const rotated = A.slice(i) + A.slice(0, i);
    if (rotated === B) {
      return i;
    }
  }

  return -1;
}

const stringA = "abcdef";
const stringB = "defabc";
console.log(countRotationsToMatch(stringA, stringB));
