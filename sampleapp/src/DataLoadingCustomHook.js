import useFetch from "./UseFetch";
function DataLoadingCustomeHook() {
    const data = useFetch('https://jsonplaceholder.typicode.com/posts')
    return (
        <>
            <ul>
                {
                    data.map(item => (
                        <li key={item.id}>  {item.title}</li>
                    ))
                }
            </ul>
        </>
    )
}
export default DataLoadingCustomeHook;