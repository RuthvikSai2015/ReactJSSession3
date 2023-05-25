import Greeting from "./Greeting";


function Greeter({name,email,hobbies="reading"}) { //const {name,email,hobbies} = user;
  // const {name,email,hobbies} = props.user; second way
    console.log(`${name}  ----- ${email}  --------  ${hobbies}`)
    return (
        <>
            {/* First way  */}
            {/* <p> Name is {props.user.name}</p>
                <p> Email is {props.user.email}</p>
                <p> Hobbies is {props.user.hobbies}</p> */}

            {/* <p> Name is {props.name}</p>
            <p> Email is {props.email}</p>
            <p> Hobbies is {props.hobbies}</p> */}

             {/* Destructuring  */}
            <p> Name is {name}</p>
            <p> Email is {email}</p>
            <p> Hobbies is {hobbies}</p>

            <Greeting name="Krishna Kumar" showNav/>
           
        </>
    )
}

// function Greeter(props){

//     //props.name="Krishna";
    
//     return(
//         <p>{props.name}</p>
//     )
// }
export default Greeter;