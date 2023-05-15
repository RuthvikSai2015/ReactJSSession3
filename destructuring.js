// let user = {
//     name : "akash",  // name = akash
//     age : 28 ,      // age = 28
//     email : "akash@gmail.com", // email = akash@gmail.com
//     mobileNumber : "987654321",
//     address : {
//                city:"bangalore",
//                place:"k r puram",
//                pincode:560049,
//                location : { lat:123456,
//                             long:456783
//                }
//     }
// }
// const {
//     address: {
//       location: { lat, long },
//     },
//   } = user;

//   console.log(lat);
//   console.log(long);

// // const { name , age , email } = user;

// // console.log(name);
// // console.log(age);
// // console.log(email);

// //Internally 
// // const name = user.name 
// // const age = user.age
// //const email = user.email 
// // const age1 = user.age1 ? does it exist ? undefined 

// // const { name,mobileNumber="123456789"} = user;

// // console.log(name);  // akash 
// // console.log(mobileNumber); // 123456789

// // console.log(user);

// //Internally 
// // const mobileNumber = user.mobileNumber === undefined ? defaultValue : user.mobileNumber 

// // ternary operator 


// // const { name:firstName } = user; //akash firstName => akash
// // const name = "savitha"; //savitha

// // console.log(name);       //  savitha
// // console.log(firstName);  // akash

// // nested object 
// //user.address

// //const {address} = user;// address = user.address
// // const {address:{city}} = user; // city =  user.address.city

// // const {address:{place}} = user; // place = user.address.place

// // const {address:{city,place}} = user;
// // //console.log(address);
// // console.log(city);
// // console.log(place);

// // destructure city.location


// let arr = ["ramesh","kumar","123","456","567","789"];

// let [firstName,lastName,...numbers] = arr;

// console.log(firstName);
// console.log(lastName);
// console.log(numbers);
// //rest of operator

//  const { name , age ,  ...otherProps} = user;

//  console.log(name);
//  console.log(otherProps);



//  // Swap Variables in javascript 

//  a=10,b=20;
//  //a=20,b=10
// // [] = []

// [a,b] = [b,a];

// console.log(a);
// console.log(b);

const johnData = {};

console.log(johnData.address); //undefined 
//undefined
//console.log(johnData.address.city); // undefined
//undefined.undefined 

//1. user.address && user.address.city && user.address.city.name

console.log(johnData?.address?.city); // undefined