// // print 1 to 10 

// let i = 0;
// while (i < 3) { // 0<3 , 1<3 , 2 < 3 , 3<3 
//     console.log(i); //infinite loop
//     i++;
// }

// //Initialization , Condition , Increment / Decrement 
// for(let j=0; j<3; j++){
//    console.log(j);
// }

// for .. in and for of loops

let userObj = {
    name : "malini",
    id : 123,
    age : 28,
    isAdmin : true ,
    "likes code":true
}

//console.log(obj);

//for .. in loop 
for(let key in userObj){
    console.log(key,"-----------value ----------",userObj[key]);
    //console.log(userObj[prop]); // name , id , age , isAdmin
}

 //1. name => userObj["name"]  => malini
 //2.id => 123 
 //3.age => 28
 //4.isAdmin => true
 //5.likes code => true
    
// for .. of loops

let fruits = ["Apple","Banana","plum","guava"];

for(let k=0; k<fruits.length; k++){  //1 for 
    console.log(fruits[k]);
 }

 // for .. of loop

 for(let fruit of fruits){  //2 for of 
    console.log(fruit);
 }