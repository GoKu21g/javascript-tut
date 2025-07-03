
const myArr = [0,1,2,3,4,5,6]



const myArr2 = (1,2,3,4,5)


// myArr.push(7)

// myArr.pop()

// myArr.unshift(10);
// myArr.shift()

// console.log(myArr);


// console.log(myArr.includes(7))
// console.log(myArr.indexOf(10));



const newStringArr = myArr.join()

// console.log(newStringArr);
// console.log(typeof newStringArr);


// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log("B", myArr);
console.log(myn1);


const myn2 = myArr.splice(1,3) //it manipulates the original array 

console.log("C", myArr);
console.log(myn2);
