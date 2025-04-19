import classNames from 'classnames';
import structuralStyles from './Conversation.module.css';
import './keyframes.css';
import './animations.css';

const OnSpot = ({ actors }) => {
  return (
    <div className={structuralStyles.onSpot}>
      {actors.map((actor) => (
        <img
          className={classNames(structuralStyles.actor, 'slide-rotate-ver-r-bck')}
          key={actor.id}
          src={actor.costume.default.bodyImage}
          alt={actor.name}
        />
      ))}
    </div>
  );
};

export default OnSpot;
