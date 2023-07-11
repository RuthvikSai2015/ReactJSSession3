import { useEffect,useState } from "react";
export default function useFetch(url){
    const [content,setContent] = useState([])
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(json => setContent(json))
    }, []);
   return content;
}