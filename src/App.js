import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1);
    };

  const handleDecrement = () => {
   if (counter > 1) setCounter(counter - 1); 
  };

  return (
    <div className="App">
<>
<h2>Counter: {counter} </h2>
<button onClick={handleIncrement}>+</button>
<button onClick={handleDecrement}>-</button>
</>
</div>
  )}

  export default App;
