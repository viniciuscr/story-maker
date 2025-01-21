import { useRef } from 'react';
import classNames from 'classnames';

import personalizedStyles from '../../personalized.module.css';
import structuralStyles from './TextBox.module.css';

import useKeyBinder from '../keyBinder/useKeyBinder';
import useDialogue from '../dialogue/useDialogue';
import MenuItem from '../../core-base/MenuItem';

const TextBox = ({ children, translucent, ...props }) => {
  const [dialogue, choose, nextInteraction] = useDialogue();

  const moreRef = useRef();

  //TODO : only use repetable = true if is the second time, or set to skip all
  useKeyBinder(' ', () => moreRef.current?.click(), true);

  const Choices = ({ options }) => (
    <ul className={personalizedStyles.choicesBox}>
      {options.map((choice, index) => (
        <MenuItem key={index} className={personalizedStyles.choice} action={() => choose(choice)} label={choice.text} />
      ))}
    </ul>
  );

  const Dialogue = ({ text, next }) => (
    <>
      <div className={classNames(structuralStyles.text, personalizedStyles.text)}>
        {text?.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      {dialogue?.choices ? (
        <Choices options={dialogue.choices} />
      ) : (
        <div className={structuralStyles.more}>
          <button ref={moreRef} className={structuralStyles.button} onClick={() => nextInteraction(next)}>
            ︾
          </button>
        </div>
      )}
    </>
  );

  const Portrait = ({ actor }) => (
    <div className={classNames(structuralStyles.portrait, personalizedStyles.portrait)}>
      <img alt={actor.name} src={actor.portrait} />
      <div
        className={classNames(personalizedStyles.name, {
          [structuralStyles.female]: true,
          [structuralStyles.male]: false,
          [structuralStyles.main]: false,
        })}
      >
        {actor.name}
      </div>
    </div>
  );

  return (
    <div className={classNames(structuralStyles.dialogBox, personalizedStyles.dialogBox)} {...props}>
      {dialogue.actor && <Portrait actor={dialogue.actor} />}
      <Dialogue text={dialogue.text} next={dialogue.next} />
    </div>
  );
};

export default TextBox;
