import React, {useRef} from "react";
import PropTypes from "prop-types";

const AddPlayerForm = ({addPlayer}) => {
    const playerInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(playerInput.current.value);
        e.currentTarget.reset();
    }

    return (
        <form onSubmit = {(e) => handleSubmit(e)}> 
            <input 
                type="text" 
                ref={playerInput}
                placeholder="Enter a player's name" 
            />
            <input 
                type="submit" 
                value="Add Player" 
            />
        </form>
    );
}

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func.isRequired
}

export default AddPlayerForm;