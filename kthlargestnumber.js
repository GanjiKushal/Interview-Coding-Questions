let arr=[21,45,14,87,9,30,25,64,88,20]
let k=2
let max
function kthLargest(arr,k){
    if(k==0){
        return max
    }
     max=Math.max(...arr)
    k--
    for(let i=0;i<arr.length;i++){
        if(arr[i]==max){            
            arr[i]=Number.NEGATIVE_INFINITY
            break
        }
        
    }
    return kthLargest(arr,k)
}
console.log(kthLargest(arr,k));