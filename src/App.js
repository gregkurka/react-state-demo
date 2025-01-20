import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [togetherCount, setTogetherCount] = useState(0);

  function handleTogetherClick() {
    setTogetherCount(togetherCount + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <SeperateButton />
      <SeperateButton />
      <h1>Counters that update together</h1>
      <TogetherButton
        togetherCount={togetherCount}
        onClick={handleTogetherClick}
      />
      <TogetherButton
        togetherCount={togetherCount}
        onClick={handleTogetherClick}
      />
    </div>
  );
}

function SeperateButton() {
  const [count, setCount] = useState(0);

  function handleClickSeparate() {
    setCount(count + 1);
  }

  return <button onClick={handleClickSeparate}>Clicked {count} times</button>;
}

function TogetherButton({ togetherCount, onClick }) {
  return <button onClick={onClick}>Clicked {togetherCount} times</button>;
}

export default App;
