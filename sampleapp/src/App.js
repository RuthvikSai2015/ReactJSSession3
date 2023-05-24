import logo from './logo.svg';
import './App.css';
// import Welcome from './Welcome'
import Greeting from './Greeting';
import Greeter from './Greeter';

function App() {
  let course = "reactjs";
  let user = { name: "savitha",
               email: "savitha@gmail.com",
               hobbies: "singing,collecting stamps" 
              };
  const {name,email,hobbies} = user;
  let objArray = ["1", "2", "3"];
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
          Edit <code>src/App.js</code> React js 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      {/* <Welcome/>
      <Welcome/>
      <Welcome/>
      <Welcome/> */}
      {/* <Greeting name="rahul" age={28} courseName={course}  dataObj={obj} dataArray={objArray} isAdmin/> 
      <Greeting name="krishna" age={28} isAdmin={false}/> */}
    
      {/* <Greeter name = {user.name} email = {user.email} hobbies={user.hobbies}/> */}

      <Greeter name = {user.name} email = {user.email} hobbies="playing"/>

      {/* <Greeter name = "kumar" /> */}
       
      
    </div>

  );
}

export default App;

