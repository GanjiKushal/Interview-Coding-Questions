let arr=[1,2,2,5,4,7,8,1,5,7,9,10,2,1,5]
let map=new Map()
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],1+map.get(arr[i]))
    }else{
        map.set(arr[i],1)
    }
}
let max=Number.NEGATIVE_INFINITY
for(let [key,value] of map){
    if(value>max){
        max=value
    }
}
for(let key of map.keys()){
    if(map.get(key)==max){
        console.log(key);
    }
}