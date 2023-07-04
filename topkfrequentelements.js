let arr=[1,1,1,2,2,3,3,4,4]
let k=3
function topKFrequency(arr,k){
    let map=new Map()
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],1+map.get(arr[i]))
        }
        else{
            map.set(arr[i],1)
        }
    }
    
    let arr2=[]
    for(let [key,value] of map){
        arr2.push([key,value])
    }
    //console.log(arr2)
    arr2.sort((a,b)=>{
        b[1]-a[1]
    })
   // console.log(arr2)
    let res=[]
    for(let i=0;i<k;i++){
        res.push(arr2[i][0])
    }
    return res
}
console.log(...topKFrequency(arr,k))