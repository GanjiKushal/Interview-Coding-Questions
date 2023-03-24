let n=5
function Recurssion(n){
    if(n==0 || n==1){
        return 1
    }
    return n*Recurssion(n-1)
}
console.log(Recurssion(n));