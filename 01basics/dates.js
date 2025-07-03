// const today = new Date()
// console.log(today.toString());
// console.log(today.toUTCString());
// console.log(today.toLocaleTimeString());

// console.log(typeof today);


// let newday = new Date(2023,0,23)
// console.log(newday.toDateString());

// let newday = new Date("01-04-2025")
// console.log(newday.toLocaleString());

// let TimeStamp = Date.now()

// console.log(TimeStamp);

// console.log(newday.getTime());

// console.log(Math.floor(Date.now()/1000));  //for time in seconds

let newday = new Date();

console.log(newday.getMonth() +1);

newday.toLocaleString('default',{
    weekday : 'narrow'
})


