let sum = function(a,b){
    return a+b;
}

//1. Arrow functions
let a=10,b=20;

let addNumbers = () => a+b ;

// need to double a number
let double = function(n){
    return n*2;
}

//let doubleNumber = (n) => { return n*2 };

//2 step 
let doubleNumber = n => n*2;  // return n=n*2

console.log(doubleNumber(10));

console.log("add-",addNumbers());



