import { useEffect, useState } from "react";

function UseEffectFetch() {

    // string = null or ""
    // boolean = 0
    //float = 0.0
    // array  =  []
    // obj = {}
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(resp => resp.json())
            .then(json => setContent(json))
    }, []);
    return (
        // <ul>
        //     {content.map((item) =>
        //         <li key={item.id}>{item.title}</li>
        //     )
        //     }
        // </ul>
        <>
          <button>Posts</button>
          <button>Users</button>
          <button>Todos</button>
        </>
    )
}
export default UseEffectFetch;