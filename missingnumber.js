let arr=[1,2,3,10,14,20,21,22,31,45]
let min=Math.min(...arr)
let max=Math.max(...arr)
let ans=[]
for(let i=min;i<max;i++){
    if(arr.indexOf(i)<0){
        ans.push(i)
    }
}
console.log(ans);