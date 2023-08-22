const OnSpot = ({ actors }) => {
  return (
    <div>
      {actors.map((actor) => (
        <img src={actor.costume.default.bodyImage} alt={actors.name} />
      ))}
    </div>
  );
};

export default OnSpot;
