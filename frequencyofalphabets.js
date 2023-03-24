let str="ganjikushal"
function Frequency(str){
    let map=new Map()
    for(let i=0;i<str.length;i++){
        let char=str[i].toUpperCase()
        if(map.has(char)){
            map.set(char,1+map.get(char))
        }else{
            map.set(char,1)
        }
    }
    let arr=[]
    for(let [key,value] of map){
        arr.push(`${key}${value}`)
    }
    arr=arr.sort().join("")
    return arr
}
console.log(Frequency(str));
