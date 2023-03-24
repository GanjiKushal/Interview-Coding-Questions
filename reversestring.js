let str="GanjiKushal"
str=str.split("")
for(let i=0;i<parseInt(str.length/2);i++){
    let x=str[i]
    str[i]=str[str.length-1-i]
    str[str.length-1-i]=x
}
console.log(str.join(""));