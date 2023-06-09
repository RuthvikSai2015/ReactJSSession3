import { useEffect, useState } from "react";

function UseEffectFetch() {

    // string = null or ""
    // boolean = 0
    //float = 0.0
    // array  =  []
    // obj = {}
    const [content, setContent] = useState([]);
    const [contentType,setContentType] = useState("");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
            .then(resp => resp.json())
            .then(json => setContent(json))
    }, [contentType]);

    // const handleClick = (contentType) => {
    //     console.log("content type ----",contentType);
    //     fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
    //     .then(resp => resp.json())
    //     .then(json => setContent(json))
    // }
    return (
        <>
        {/* <ul>
            {content.map((item) =>
                <li key={item.id}>{item.title}</li>
            )
            }
        </ul> */}
      
          <button onClick={() => setContentType('posts')}>Posts</button><br/>
          <button onClick={() => setContentType('users')}>Users</button><br/>
          <button onClick={() => setContentType('todos')}>Todos</button>
        </>
    )
}
export default UseEffectFetch;