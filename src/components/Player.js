import React, {memo} from "react";

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
  
  export default memo(Player, playerPropsAreEqual);