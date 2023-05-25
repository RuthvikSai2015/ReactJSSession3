function Greeting(props) {
    console.log(props);
    return (
        <>
            {/* <p>This is a Greeter Component Name is {props.name} and Age is <strong>{props.age + 10}</strong></p>
            <p> Admin is {props.isAdmin} {true} {undefined} {false} {null}</p>
            <p> Course Name is : {props.courseName} </p> */}
            <p> This is Greeting Component</p>
            <p> My name is  {props.name}</p>
            <p> ShowNav is {props.showNav} </p>
            <p> Hobbies are singing,collecting stamps</p>
        </>
    )
}
export default Greeting