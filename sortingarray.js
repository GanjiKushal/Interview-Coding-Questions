let arr=[1,5,87,14,12,54,94,16]
// arr=arr.sort((a,b)=>a-b)
// console.log(arr);
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let x=arr[i]
            arr[i]=arr[j]
            arr[j]=x
        }
    }
}
console.log(arr);