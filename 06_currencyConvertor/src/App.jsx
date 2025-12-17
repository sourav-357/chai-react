import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center text-white my-3 ">
        Chai and Currency Convertor
      </h1>
    </>
  );
}

export default App;
