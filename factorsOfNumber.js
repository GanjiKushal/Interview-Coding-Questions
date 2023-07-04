let n=6
function Factors(n){
    let arr=[]
    for(let i=1;i<=n;i++){
        if (n%i===0) arr.push(i)
    }
    return arr
}
console.log(Factors(n));