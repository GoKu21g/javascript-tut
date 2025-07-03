
// singleton
// Object.create

// object literals

const mysym = Symbol("key1");

const jsperson = {
    name: "Gourav",
    age: 19,
    [mysym]: "mykey1",
    "MyFullName": "Gourav Kumar",
    isLoggedIn: false,
    email: "goku@goool.com",
};

jsperson.degree = "Bennett University"

// console.log(jsperson["MyFullName"]);
// console.log(jsperson[mysym]);

jsperson.email = "google.com"

console.log(jsperson);

// Object.freeze(jsperson)


jsperson.greeting = function(){
    console.log("Hello, js User");
}

jsperson.greetingtwo = function(){
    console.log(`${this.name} Hello`);
}


console.log(jsperson.greetingtwo());
