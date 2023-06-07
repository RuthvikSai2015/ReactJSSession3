import { useEffect } from "react";

function UseEffectFetch(){

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
         .then(response => response.json())
         .then(json => console.log(json))
    },[]);
    return (
        <>
        </>
    )
}
export default UseEffectFetch;