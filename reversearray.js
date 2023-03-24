let arr=[10,20,30,40,50,60,70]
for(let i=0;i<parseInt(arr.length/2);i++){
    let x=arr[i]
    arr[i]=arr[arr.length-1-i]
    arr[arr.length-1-i]=x
}
console.log(arr);