import  {useState} from "react";
import { Timer } from './components/Timer';
import './App.css';

function App() {
  const [Toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <h3>Timer</h3>
      {Toggle === false ? <Timer start={0} end={10} /> : null}
      <button
        onClick={() => {
          setToggle(true);
        }}
      >
        Toggle counter
      </button>
    </div>
  );
}

export default App;
