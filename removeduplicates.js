let str="helloworld"
str=str.split("")
str=[...new Set(str)]
str=str.join("")
console.log(str);

//Method-2
// let str1=new Set()
// for(let i=0;i<str.length;i++){
//     str1.add(str[i])
// }
// let str2=''
// for(let i of str1){
//     str2=str2+i
// }

// console.log(str2);