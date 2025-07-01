const name = "Gourav"
const repoCount = 50

// console.log(name+repoCount+"Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Gourav-gp')

// console.log(gameName.__proto__);


// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,6) //last value would'nt be included
console.log(newString);


const StringSlice = gameName.slice(0,6) //can use negative values
console.log(StringSlice);


const SpaceString = "     Hitesh     "
console.log(SpaceString)
console.log(SpaceString.trim());


const url = "https://gourav.com/gourav%69kumar"
console.log(url.replace('%69', '-'));

console.log(url.includes('kumar'));

console.log(gameName.split('-'));

