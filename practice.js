// // console.log(1+4+9+16+25+36+49+64+81+100);
// console.log("2"==2);
// console.log("2"===2);
// console.log("2"-2);
// let n=5
// // let sum=0
// // for(let i=1;i<=n;i++){
// //     sum=sum+i**2
// // }
// // console.log(sum);
// function Fibi(n){
//     if(n==1){
//         return 0
//     }
//     if(n==2){
//         return 1
//     }
//     return Fibi(n-1)+Fibi(n-2)
// }
// console.log(Fibi(n));
// console.log(3 + +"3");
let str="kwawkj"
let flag=true
for(let i=0;i<parseInt(str.length/2);i++){
    if(str[i]!==str[str.length-1-i]){
        flag=false
    }
}
flag ? console.log("Palindrome"):console.log("Not Palindrome");