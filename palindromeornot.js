let str="kwawk"
function palindromeOrNot(str){
    for(let i=0;i<parseInt(str.length/2);i++){
        if(str[i]!=str[str.length-1-i]){
            return "Not Palidrome"; 
        }
    }
    return "Palindrome"
}
console.log(palindromeOrNot(str));