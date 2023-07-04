//import React from "react";
import {createContext,useContext} from "react";
export const UserContext = createContext();
//consumer

// function User() {
//     return (
//         <UserContext.Consumer>
//             {
//                 value => <h1>{value}</h1>
//             }
//         </UserContext.Consumer>
//     )
// }
function User() {
    const value = useContext(UserContext);
    return (
           <h1>{value}</h1>
    )
}
//producer
function ReactContextExample() {
    return (
        <UserContext.Provider value="Context testing">
            <User />
        </UserContext.Provider>
    )
}
export default ReactContextExample;