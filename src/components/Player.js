import React, {memo} from "react";
import PropTypes from "prop-types";

import Counter from "./Counter";

const Player = ({removePlayer, name, id, score, changeScore}) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
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

  const playerPropsAreEqual = (prevProps, nextProps) => {
    return prevProps.score === nextProps.score;
  }
  
  Player.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func
  }

  export default memo(Player, playerPropsAreEqual);