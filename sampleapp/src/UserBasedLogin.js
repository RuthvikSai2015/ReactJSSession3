
function GuestLogin() {
    return (
        <h1>Welcome Guest</h1>
    )
}
function EndUserLogin() {
    return (
        <h1>Welcome End User</h1>
    )
}
function UserBasedLogin(props) {
    console.log(typeof(props.isLoggedIn));
    // if (props.isLoggedIn) {
    //     return <EndUserLogin />
    // } 
    //     return <GuestLogin />

    return ( 
        props.isLoggedIn ? <EndUserLogin/> : <GuestLogin/>
    )
}
export default UserBasedLogin;
