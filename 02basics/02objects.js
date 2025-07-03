const name = new Object()


const bumble = {
    firstname:"Gourav",
    Lastname:"Kumar",
    email:"sarilakadi@xyan.com"
} 

const user = {
    email: "goku@123gmail.com",
    fullname:{
        username:{
            firstname:"Gourav",
            lastname: "Kumar"
        }
    }
}

// console.log(user.fullname.username.firstname);

const obj1 = {1:"1", 2:"2", 3:"3"}
const obj2 = {4:"4", 5:"5", 6:"6"}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]


users[1].email;

// console.log(Object.keys(bumble));

// console.log(Object.values(bumble))

// console.log(Object.entries(bumble));

console.log(bumble.hasOwnProperty("Gourav"));







