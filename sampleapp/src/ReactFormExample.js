import Button from "react-bootstrap/Button";
import { useState } from "react";
function ReactFormExample() {
    const initialValues = {
        email:"",
        password:""
    };
    const [formValues,setFormValues] = useState(initialValues);
    const [formErrors,setFormErrors] = useState({})//email is blank,password is blank 
    const handleInputChange = (event) =>{
       // console.log(event.target);
       // [event.target.name]:event.target.value
        const {name,value} = event.target;

        setFormValues(
           {...formValues,[name]:value}

        ) 
        console.log(formValues);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        setFormErrors(validate(formValues)); //formValues.email , formValues.password
    }
    const validate = (values) =>{
        let errors = {};
        if(!values.email){ // if(""){} else {}
            errors.email = "Email is required";
        }
        if(!values.password){ // if(""){} else {}
            errors.password = "Password is required";
        }
        console.log(errors);
        return errors;
    }
    return (
        <>
            <h1> Sign In Form</h1>
            <form>
                <div>
                    <label>Email :</label>
                    <input type="email" name="email" id="email" onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" id="password" onChange={handleInputChange}/>
                </div>
                <Button onClick={handleSubmit}>Submit</Button>
            </form>
        </>
    )
}
export default ReactFormExample