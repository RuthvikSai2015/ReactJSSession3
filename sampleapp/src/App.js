import logo from './logo.svg';
import './App.css';
// import Welcome from './Welcome'
import Greeting from './Greeting';
import Greeter from './Greeter';
import UserBasedLogin from './UserBasedLogin';
import LogicalOperator from './LogicalOperator';
import EventHandlingExample from './EventHandlingExample';
import NumbersList from './NumbersList';
import ReactLists from './ReactLists';
import ClassComponents from './ClassComponents';
import ReactUseState from './ReactUseState';
import ReactUseStateForm from './ReactUseStateForm';
import UseEffectExample from './UseEffectExample';
import UseEffectFetch from './UseEffectFetch';
import ErrorHandling,{Footer}  from './ErrorHandling';

function App() {
  // let course = "reactjs";
  // let user = { name: "savitha",
  //              email: "savitha@gmail.com",
  //              hobbies: "singing,collecting stamps" 
  //             };
  // const {name,email,hobbies} = user;
  // let objArray = ["1", "2", "3"];
  const Movies = [
    {id:123,name:"movie1"},
    {id:456,name:"movie2"},
    {id:789,name:"movie3"}
]
  return (
    <div>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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

      {/* <Greeter name = {user.name} email = {user.email} hobbies="playing" /> */}

      {/* <Greeter name = "kumar" /> */}
{/*        
       <UserBasedLogin isLoggedIn={false}/> */}

       {/* <LogicalOperator isLoading={true}/>

       <EventHandlingExample/> */}

       {/* <NumbersList numbers={[1,2,3,4,5]}/> */}
       {/* <ReactLists Movies={Movies}/> */}

       {/* <ClassComponents/> */}

       {/* <ReactUseState/> */}
       {/* <ReactUseStateForm/> */}
       {/* <UseEffectExample/> */}
       {/* <UseEffectFetch/> */}
        <ErrorHandling/>     
    </div>

  );
}

export default App;

