import { useState } from "react";
import Card from "./Card.jsx";

function App() {
  // let name = "Yubraj Dhakal";

  const [name, setName] = useState("Yubraj Dhakal");

  function updateName() {
    setName("Yubraj Dhakal Upamanyu");
  }

  const students = [
    "Ram",
    "Sita",
    "Hari",
    "Krishna",
    "Govinda",
    "Shyam",
    "Gopal",
    "Basudev",
  ];

  return (
    <>
      <div>
        <h1>Hello, {name}!</h1>
        <button onClick={updateName}>See Stateful </button>

        {students.map((students) => (
          <Card title={students} subtitle="Subtitle 1"></Card>
        ))}
      </div>
    </>
  );
}

export default App;
