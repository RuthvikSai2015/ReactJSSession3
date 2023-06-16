import { Route , Routes} from 'react-router-dom';
function Home() {
    return <h1> Home Component</h1>
}
function About() {
    return <h2> About Component </h2>
}
function Blog(){
    return <h2> Blog </h2>
}
function NotFound(){
    return <h2> Not Found Component  </h2>
}
function ReactRouterExample() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </>
    )
}
export default ReactRouterExample;