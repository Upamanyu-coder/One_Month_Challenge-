import Card from "./Card.jsx";

function App() {
  const name = "Yubraj Dhakal";
  return (
    <>
      <div>
        <h1>Hello, {name}!</h1>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
