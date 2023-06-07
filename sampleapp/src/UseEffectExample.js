import { useState, useEffect } from "react";

const UseEffectExample = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    // useEffect(() => {
    //     console.log("Component did Mount ");
    // })
    // click of first button 
    //
    // click of second button 
    // 
    useEffect(() => {
        console.log("Updating Component Did Update1 ");
    }, [count, count2])

    useEffect(() => {
        //setCount2(count2+1);
        console.log("Updating Component Did Update2 ");
    }, [count2])


    // useEffect(() => {
    //     // remove the resources
    //     const socket = WebSocket("server");
    //     socket.open("", data => {
    //         // setResponse ()
    //     })
    //     // ComponeWillUnmount
    //     return () => WebSocket.disconnect();
    // }, [])
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click Me1!</button> <br />
            <button onClick={() => setCount2(count2 + 1)}>Click Me2!</button>
        </>
    )
}
export default UseEffectExample;