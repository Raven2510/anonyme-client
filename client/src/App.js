import app from './App.module.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");

  function updateName(e){
    setName(e.target.value);
  }

  return (
    <>
      <h1 className={app.greet}>
        {
          name
        }
      </h1>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input className={app.input} type="text" value={name} onChange={updateName} placeholder="Enter your name..." />
      </form>
    </>
  );
}

export default App;
