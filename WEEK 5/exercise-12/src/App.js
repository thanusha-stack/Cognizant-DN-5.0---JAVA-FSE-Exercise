import './App.css';
import {useState} from "react";

function App() {
  const[login,setLogin]=useState(true);

  function toggle(){
    setLogin(!login);
  }

  return (
    <div className="App">
      <h3>{login?"Please sign up":"Welcome back"}</h3>
      <button onClick={toggle}>{login?"Login":"Logout"}</button>
    </div>
  );
}

export default App;
