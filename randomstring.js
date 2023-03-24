function randomString(length){
    let result=""
    let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    let charactersLength=characters.length
    for(let i=0;i<length;i++){
        result=result+characters.charAt(Math.floor(Math.random() *charactersLength))
    }
    return result
}
console.log(randomString(6));