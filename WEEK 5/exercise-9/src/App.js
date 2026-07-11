import logo from './logo.svg';
import './App.css';

function App() {
  const Players = [
  {
    id: 1,
    name: "Virat Kohli",
    score: 98
  },
  {
    id: 2,
    name: "Rohit Sharma",
    score: 76
  },
  {
    id: 3,
    name: "Shubman Gill",
    score: 112
  },
  {
    id: 4,
    name: "KL Rahul",
    score: 54
  },
  {
    id: 5,
    name: "Hardik Pandya",
    score: 67
  },
  {
    id: 6,
    name: "Ravindra Jadeja",
    score: 41
  }
];
  return (
    <div className="App">
      
      <h2 className="fw-bold">List of Players</h2>

      {Players.map((p)=>(
        <div key={p.id}>
        <h5>{p.name}</h5>
        <h5>{p.score}</h5>
        </div>
      ))}

      <h2 className="fw-bold">List of Players having Scores Less than 70</h2>
      {Players.filter(p=>p.score<70).map((p)=>(
        <div key={p.id}>
          <h5>{p.name}</h5>
          <h5>{p.score}</h5>
        </div>
      ))}

      
    </div>
  );
};

export default App;
