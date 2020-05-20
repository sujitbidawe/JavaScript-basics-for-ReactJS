// var is accessible from the whole function
function sayHelloWithVar(){
    for ( var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i); // i is accessed outside the block
}

// let is accessible from only the block
function sayHelloWithLet(){
    for ( let i = 0; i < 5; i++) {
        console.log(i);
    }
}

sayHelloWithVar();
console.log("~~~~~~~~~~~~~~~~~");
sayHelloWithLet();

// const is immutable variable
const x = 5;
//x = 1; // this reassignment not allowed, throws error

// person object with 3 members. 1 property and 2 methods
const person = {
    name: 'foo',
    walk: function() {},
    talk() {}
};

person.talk(); // dot notation way for accessing object
person['name'] = "bar"; // this method is used when we dont know which prorety or method is going to be used of the object

const targetMember = 'name';
person[targetMember] = 'sujit'; // when we dont know beforehand which property or method of an object we are going to access then we use
// this method

console.log(person.name);