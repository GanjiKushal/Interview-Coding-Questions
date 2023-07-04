function romanToNumeric(s) {
  let Roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let total=0
  for(let i=0;i<s.length;i++){
    if(Roman[s[i]]<Roman[s[i+1]]){
        total=total-Roman[s[i]]
    }
    else{
        total+=Roman[s[i]]
    }
 }
  return total
}
console.log(romanToNumeric("LD"))
