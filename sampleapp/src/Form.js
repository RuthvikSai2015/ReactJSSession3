import { useState, useEffect } from "react";

function Form() {

    //1. use the name state variable 
    const [name, setName] = useState("Savitha");

    //2. use and effect for persisting the form
    if (name === "suresh") {
        // useEffect(function persistForm() {
        //     localStorage.setItem("formData", name);
        // });
    }
    //3. use the surname state variable 
    const [surname, setSurName] = useState("Ramesh");

    //4. use and effect for updating the name
    useEffect(function updateTitle() {
        document.title = name + " " + surname;
    })

}