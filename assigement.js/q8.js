function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let obj={ name:"alice",age:24};
let obj2={age:25,city:"New York"};

let mergedobj=merge(obj,obj2);
console.log(mergedobj);  



