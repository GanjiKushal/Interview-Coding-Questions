let arr=[0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1]
let left=0
let right=arr.length-1
while(left<right){
    if(arr[left]==0 && arr[right]==1){
        left++
        right--
    }
    else if(arr[left]==1 && arr[right]==0){
        let x=arr[left]
        arr[left]=arr[right]
        arr[right]=x

        left++
        right--
    }
    else if(arr[left]==0 && arr[right]==0){
        while(arr[left]!=1){
            left++
        }
    }
    else if(arr[left]==1 && arr[right]==1){
        while(arr[right]!=0){
            right--
        }
    }
}
console.log(arr);