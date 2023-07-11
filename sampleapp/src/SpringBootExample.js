import { useEffect,useState } from "react";
function SpringBootExample(){
  const [content,setContent] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/hello?name=springbootreact')
            .then(response => response.text())
            .then(response => setContent(response))
    }, []);
    return (
        <>{content}</>
  
    )
}
export default SpringBootExample;