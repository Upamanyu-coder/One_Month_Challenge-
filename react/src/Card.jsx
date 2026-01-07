function Card(props) {
  console.log(props);
  return (
    <div
      style={{
        margin: "3rem",
        padding: "3rem",
        background: "red",
        color: "white",
        borderRadius: "2rem",
        width: "10rem",
        height: "10rem",
      }}
    >
      <h2>Card Title</h2>
      <p>This is a description of the card.</p>
    </div>
  );
}

export default Card;
