import user,{printAge as displayAge,printName}  from './export.js'


function printAge(user){
    console.log("user age in import is ",user.age);
}
console.log(user);
displayAge(user);
printName(user);

