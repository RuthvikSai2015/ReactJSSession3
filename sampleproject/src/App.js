import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
function Home(){
  return (
    <h1>Home Component</h1>
  )
}
function Header(){
  return(
    <h1>Header Component</h1>
  )
}
function Main(){
  return(
    <h1>Main Component</h1>
  )
}
function Footer(){
  return(
    <h1>Footer Component</h1>
  )
}
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={[<Header/>,<Home/>,<Main/>,<Footer/>]}/>
          <Route path="/header" element={<Header/>}/>
          <Route path="/main" element={<Main/>}/>

      </Routes>
      </>
  );
}

export default App;
