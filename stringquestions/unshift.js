let str1 = "abcde";
let str2 = "eabcd";

function countRotationsToMatch(A, B) {
  if (A.length !== B.length) {
    return -1;
  }

  const n = A.length;
  for (let i = 0; i < n; i++) {
    if (A === B) {
      return i;
    }
    A = A.split("");
    A.unshift(A.pop());
    A = A.join("");
  }

  return -1;
}
console.log(countRotationsToMatch(str1, str2));
// str=str.split("")
// str.unshift(str.pop())
// str=str.join("")
// console.log(str);
