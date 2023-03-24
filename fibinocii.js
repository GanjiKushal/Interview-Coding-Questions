let n=5
function Fibi(n){
    if(n==1){
        return 0
    }
    if(n==2){
        return 1
    }
    return Fibi(n-1)+Fibi(n-2)
}
console.log(Fibi(n));