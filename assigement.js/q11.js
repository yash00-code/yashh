function shallowCopy(obj) {
    return { ...obj };  
}


const original = { a: 1, b: 2 };
const copy = shallowCopy(original);

copy.a = 3;

console.log(original.a);  
console.log(copy.a);   // 3 (copy is modified)
