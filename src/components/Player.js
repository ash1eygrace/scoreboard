import React, {memo} from "react";

import Counter from "./Counter";

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          {props.name}
        </span>
  
        <Counter 
        score={props.score}
        id={props.id}
        changeScore={props.changeScore}
        />
      </div>
    );
  }

  const playPropsAreEqual = (prevProps, nextProps) => {
    return prevProps.score === nextProps.score;
  }
  
  export default memo(Player, playerPropsAreEqual);