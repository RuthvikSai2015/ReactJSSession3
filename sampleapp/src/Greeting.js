function Greeting(props){
    console.log(props);
    return (
        <p>This is a Greeter Component Name is {props.name} and Age is <strong>{props.age+10}</strong></p>
    )
}
export default Greeting
