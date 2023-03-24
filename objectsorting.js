let obj = [
  { id: 3, name: "Kushal" },
  { id: 2, name: "Nani" },
  { id: 4, name: "Ajay" },
  { id: 1, name: "Prabhat" },
];
const ans=obj.sort((a,b)=>{
    if(Number(a.id)<Number(b.id)){
        return -1
    }
    else{
        return 1
    }
})
console.log(ans);