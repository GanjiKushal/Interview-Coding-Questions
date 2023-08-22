function countRotationsToMatch(A, B) {
    if (A.length !== B.length) {
        return -1;
    }

    const n = A.length;
    for (let i = 0; i < n; i++) {
        if (A === B) {
            return i;
        }
        A = A.split('');
        A.push(A.shift());
        A = A.join('');
    }

    return -1;
}


const stringA = "abcdef";
const stringB = "bcdefa";
console.log(countRotationsToMatch(stringA, stringB)) ;
