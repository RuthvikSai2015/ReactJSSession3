console.log("External Javascript file");
//trying to access sample button 
// document.getElementById("sample").value = "Sample";

// Objects 
// let userObj = {
//     name : "savitha",
//     age : 28,
//     id : 1234,
//     "hobbies" : "singing, dancing"
// }
//console.log("user object ----- ",userObj);

// Accessing the object properties 

// .dot Notation

//console.log("Age of user---", userObj.age);

// Add properties to an object 

// userObj.isAdmin = true; 
// userObj.profession = "engineer";

// //Modify the property value 
// userObj.age = 30 ;

//console.log("after adding property user object ----- ",userObj.age);

// delete a property 

// let a = 10;
// console.log(delete a); // can this be done ?  false 

//delete is used to delete an object property only 

//console.log("is it deleted? ",delete userObj.isAdmin);

//console.log("after deleting property user object ----- ",userObj);

let userObj = {
    name : "savitha",
    age : 28,
    id : 1234,
    "hobbies" : "singing, dancing",
    "likes gaming": true
}

//console.log(userObj.course); 
//console.log(a);



// bracket notation 
console.log("Gaming interest----",userObj["likes gaming"]);


let obj = {
    let : 10,
    return : true,
    var : "var",
    const : "const",
    "likes code":true
}

console.log("object------",obj.let);