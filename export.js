let user = {
    firstName : "savitha",
    age : 28,
    lastName : "ramesh"
}
function printName(user){
    console.log(`User name is ${user.firstName}`);
}
function printAge(user){
    console.log(`User age is ${user.age}`);
}
// export the data
export default user;
export {printName,printAge} 