import React, { useState, useEffect } from "react";
import Popup from "./components/Popup";


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimedPopup(true);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="App">
      <main>
        <h1>React Popups</h1>
        <button onClick={() => setButtonPopup(true)}>Open Popups</button>
      </main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My Popup</h3>
        <p>This is my button</p>
      </Popup>

      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3>My Timed PopUp</h3>
        <p>This is my button</p>
      </Popup>
    </div>
  );
}

export default App;
