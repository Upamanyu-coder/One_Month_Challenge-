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
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
}

export default Card;
