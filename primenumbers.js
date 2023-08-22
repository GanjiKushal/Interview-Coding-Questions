let n = 20;
function Prime(n) {
    let arr=[]
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
        arr.push(i);
    }
  }
  return arr
}
console.log(Prime(n));

//Code for prime number
// let n = 2;
// function Prime(n) {
//     let isPrime = true;
//     for (let j = 2; j < n; j++) {
//       if (n % j == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//         return "True"
//     }else{
//       return "False"
//     }
    
//   }
 
// console.log(Prime(n));

