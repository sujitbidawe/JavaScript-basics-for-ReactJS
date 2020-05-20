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
x = 1; // this reassignment not allowed, throws error