//   // 
 function hoistingExample(){
    console.log(a);
   const a = 10;
 
}
// //hoistingExample(); // with let i got error
// // var got undefined

// // //Internally with hoisting 
// // function hoistingExample(){
// //     console.log(a);
// //     var a = 10;
// // }
//  hoistingExample(); 


//  const arr = [1,2,3,4]; // initalization #abcdef123
//  //arr = [5,7,8]; // modifying the original array hash address 
//  arr[0] = 8; // replacing the value 
//  arr[1] = 9;
//  arr[2] = 10;

//  console.log(arr); // invalid , valid 


//  function scopeExample(){
//     for(let i=0;i<10;i++){
//         //.. body
//         console.log(i);
//     }
//     console.log(i); 
//  }
//  scopeExample();


//  var a = 10; //valid
//  var a = 50 ; //valid
//  a = 100;

//  let b = 10; // valid
//  b = 100; // valid

//  const c = 10; // valid

//  var value = 100;
//      value = 150;
//  var value = 50;


// console.log("value --", value); // 10 , undefined 
// var value=10;

//  var value ;
//  console.log("value --", value);
//  var value = 10 ; 

//  function addNumbers(){
//     return 10 + 20;
//  }
//  addNumbers();
