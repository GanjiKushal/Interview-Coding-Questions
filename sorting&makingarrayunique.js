let arr=[1,6,3,7,6,9,6,2]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let x=arr[i]
            arr[i]=arr[j]
            arr[j]=x
        }
    }
}
//console.log(arr);
let Arr=[...new Set(arr)]
console.log(Arr);
let sum=0
for(let i=0;i<Arr.length;i++){
    sum=sum+Arr[i]
}
console.log(sum);