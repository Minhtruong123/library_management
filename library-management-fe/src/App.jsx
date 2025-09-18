import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePages from "./components/Pages/HomePages";
import DetailsBook from "./components/Pages/DetailsBook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DetailsBook />
    </>
  );
}

export default App;
