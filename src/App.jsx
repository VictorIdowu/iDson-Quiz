import { useState } from "react";
import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";
import { Landing } from "./components/Landing.jsx";

const App = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <Header />
      <main>{start ? <Quiz /> : <Landing setStart={setStart} />}</main>
    </>
  );
};

export default App;
