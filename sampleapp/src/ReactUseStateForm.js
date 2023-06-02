import {useState} from "react";
function ReactUseStateForm(){
    // count = 0 , count +1 
    //{    email : "", password : "" }
    const [formState,setFormState] = useState({
        email : "",
        password : ""
    });
    // create an object and push it
   // const [email,setEmail] = useState("");
   // const [password,setPassword] = useState("");
   //setPassword("value")
   //const [firstName,setFirstName] = useState("");
    const handleInputs = (event) =>{
       // console.log(event);
        // console.log("name --- ",event?.target?.name);
        // console.log("value -----", event?.target?.value);
        // name = email  , value => savitha@gmail.com
        //count=0 setCount(count+1)
        setFormState({
            ...formState,          // persist the previous value
            [event?.target?.name]: event?.target?.value // add the new value
        })
        console.log("form state ---",formState);
        // /sendData/ = {formState}
    }
    return (
        <form>
            {/* Name : <input name="firstName" type="text" onChange={handleInputFuction}></input> */}
            Email : <input name="email" type="email" onChange={handleInputs}></input>
            Password : <input name="password" type="password" onChange={handleInputs}></input>
            <input type="button" value="button"></input>
            {/* <button> Submit </button> */}
        </form>
    )
}
export default ReactUseStateForm;