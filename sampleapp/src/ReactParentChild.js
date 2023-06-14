import { useState } from "react"

function Increment(props) {
    return <button onClick={props.onClickfunction}> Increment </button>
}
function Decrement(props) {
    return <button onClick={props.onClickfunction}> Decrement </button>
}
function Counter(props) {
    return <p> Count : {props.count}</p>
}
function ReactParentChild() {
    const [counter,setCounter] = useState(0);
   // const incrementCounter = () => console.log("inc is clicked");
    const incrementCounter = () => setCounter(counter+1);
    const decrementCounter = () => setCounter(counter-1);
    return (
        <>
            <Increment onClickfunction={incrementCounter}/><br />
            <Counter count={counter}/> <br />
            <Decrement onClickfunction={decrementCounter}/><br />
        </>
    )
}
export default ReactParentChild;