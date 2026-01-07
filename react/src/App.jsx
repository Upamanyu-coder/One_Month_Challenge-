import Card from "./Card.jsx";

function App() {
  const name = "Yubraj Dhakal";
  return (
    <>
      <div>
        <h1>Hello, {name}!</h1>
        <Card label="Card 1" />
        <Card label="Card 2" />
        <Card label="Card 3" />
        <Card label="Card 4" />
        <Card label="Card 5" />
        <Card label="Card 6" />
      </div>
    </>
  );
}

export default App;
