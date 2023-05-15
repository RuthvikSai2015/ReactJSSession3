const numbers = [5, 6, 7, 8];
//double the elements 
// const doubleNumbers = numbers.map(function(element){
//     // console.log(index);
//     // console.log(element);
//     return element * 2;

// })


// modify to arrow function 

const doubleNumbers = numbers.map(n => n * 2);
console.log(doubleNumbers);

const doubleArray = numbers.map(n => { n * 2 }); // undefined 
console.log(doubleArray);

let userArray = [{ name: "akash", age: 32, salary: 25000 },
                 { name: "savitha", age: 28, salary: 30000 },
                 { name: "ramesh", age: 36, salary: 20000 }
                ];

//increase the salary by 1000

let updateUsers  = userArray.map((item) =>{
    item.salary = item.salary+1000;
    return item;
});

console.log(updateUsers);

