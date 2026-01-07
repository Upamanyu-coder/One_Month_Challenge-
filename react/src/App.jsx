import Card from "./Card.jsx";

function App() {
  const name = "Yubraj Dhakal";
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

        {students.map((students) => (
          <Card title={students} subtitle="Subtitle 1">
            {" "}
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
