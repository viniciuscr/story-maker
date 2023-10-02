import structuralStyles from "./Conversation.module.css";

const OnSpot = ({ actors }) => {
  return (
    <div className={structuralStyles.onSpot}>
      {actors.map((actor) => (
        <img
          key={actor.id}
          src={actor.costume.default.bodyImage}
          alt={actor.name}
        />
      ))}
    </div>
  );
};

export default OnSpot;
