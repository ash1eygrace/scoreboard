import React, {memo} from "react";
import PropTypes from "prop-types";

import Counter from "./Counter";
import Icon from "./Icon";

const Player = ({removePlayer, name, id, score, changeScore, isHighScore}) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={isHighScore} />
          {name}
        </span>
  
        <Counter 
        score={score}
        id={id}
        changeScore={changeScore}
        />
      </div>
    );
  }

Player.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired, 
  isHighScore: PropTypes.bool.isRequired
}

const playerPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore;
}

export default memo(Player, playerPropsAreEqual);