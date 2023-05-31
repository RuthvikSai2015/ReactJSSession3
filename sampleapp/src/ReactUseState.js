import {useState} from "react"


function ReactUseState(){
    // const arrayRef = useState(0); // [ 0,f() ] [variable,setVariable]
    // const variable = arrayRef[0];  // 0 
    // const setVariable = arrayRef[1]; // f()

    const [variable,setVariable] = useState(0);
    
    // console.log(arrayRef);
    // console.log(variable);
    // console.log(setVariable)
    return(
        <h1>Functional Hooks </h1>
    )
}
export default ReactUseState;