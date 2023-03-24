let str="ganji kushal"
str=str.split(" ")
for(let i=0;i<str.length;i++){
    let str2=str[i].split("")
    str2[0]=str2[0].toUpperCase()
    str2[str[i].length-1]=str2[str[i].length-1].toUpperCase()
    str2=str2.join("")
    str[i]=str2


}
str=str.join(" ")
console.log(str);

