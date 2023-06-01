import {useState} from "react";
function ReactUseStateForm(){
    const [formState,setFormState] = useState({
        email : "",
        password : ""
    });

   // const [email,setEmail] = useState("");
   // const [password,setPassword] = useState("");
    const handleInputFuction = (event) =>{
        console.log("name --- ",event?.target?.name);
        console.log("value -----", event?.target?.value);
        setFormState({
            [event?.target?.name]: event?.target?.value
        })
        console.log("form state ---",formState);
    }
    return (
        <form>
            Email : <input name="email" type="email" onChange={handleInputFuction}></input>
            Password : <input name="password" type="password" onChange={handleInputFuction}></input>
            <button> Submit </button>
        </form>
    )
}
export default ReactUseStateForm;