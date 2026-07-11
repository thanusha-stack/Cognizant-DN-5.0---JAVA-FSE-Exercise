import './App.css';
import {useState} from "react";
function App() {
  const [number,setNumber]=useState(1);
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("INR");
  const [to,setTo]=useState("USD");
  const [currency,setCurrent]=useState(0);

  function increment() {
    setNumber(number + 1);
  }

  function decrement(){
    setNumber(number - 1);
  }

  function welcome(){
    console.log("Welcome");
  }

  function convertCurrency(e){
    e.preventDefault();
    let res=0;
    if(from===to) res=amount;
    else if(from==="INR" && to==="USD") res=amount*0.012;
    else if(from==="INR" && to==="EUR") res=amount*0.011;
    else if(from==="USD" && to==="INR") res=amount*83;
    else if(from==="USD" && to==="EUR") res=amount*0.92;
    else if(from==="EUR" && to==="INR") res=amount*90;
    else if(from==="EUR" && to==="USD") res=amount*1.09;
    setCurrent(res.toFixed(2) + " " + to);
  }

  return (
    <div className="App">
      <h4>{number}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={welcome}>Say Welcome</button>
      <br />
      <h2 className="color:green">Currency Converter</h2>
      <form>
        <label>Amount:</label>
        <input 
          name="amount"
          type="number"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <br />
        <label>From</label>
        <select 
        value={from}
        onChange={(e)=>setFrom(e.target.value)} 
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select> 
        <label>To</label>
        <select
         value={to}
         onChange={(e)=>setTo(e.target.value)}>
         <option value="INR">INR</option>
         <option value="USD">USD</option>
         <option value="EUR">EUR</option>
        </select>
        <br/>
        <button onClick={convertCurrency}>Convert</button>
        <div className="result-box">
          <h5>Currency: {currency}</h5>
        </div>
      </form>
    </div>
  );
}

export default App;
