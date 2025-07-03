const myArr1 = [1,2,3,4,5]
const myArr2 = [0,6,7,8,9]

const allArr = [...myArr1,...myArr2]

console.log(allArr);

const confuseArr = [1,2,3,[2,3,4],6,7,[8,9,[10,11]]]

const betterArr = confuseArr.flat(Infinity);

console.log(betterArr);

let num1 = 10
let num2 = 20
let num3 = 30

console.log(Array.of(num1,num2,num3));

console.log(Array.from("Gourav"))
console.log(Array.from({name: "hitesh"})) // interesting.... have to tell wether you want for key or value



