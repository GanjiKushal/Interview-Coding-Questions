const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
let keyArr=[]
for(let key in obj) keyArr.push(key)

console.log(keyArr);