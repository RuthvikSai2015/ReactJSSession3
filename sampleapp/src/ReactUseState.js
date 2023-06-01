import { useState } from "react"


function ReactUseState() {
    // const arrayRef = useState(0); // [ 0,f() ] [variable,setVariable]
    // const variable = arrayRef[0];  // 0 
    // const setVariable = arrayRef[1]; // f()

    let [count, setCount] = useState(0); // 0 , 
    const handleButtonEvent = () => {
        console.log("button clicked ");
        //count = count + 1;  
        // setCount(count + 1); //0+1
        // setCount(count + 1); //1+1

         setCount((prevCount) => prevCount+1);   
         setCount((prevCount) => prevCount+1);
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={handleButtonEvent}>Click Me!</button>
        </>
    )
}
export default ReactUseState;