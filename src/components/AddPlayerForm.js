import React, {useState} from "react";

const AddPlayerForm = ({addPlayer}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(value);
        setValue("");
    }

    return (
        <form onSubmit = {(e) => handleSubmit(e)}>
            <input 
                type="text" 
                value= {value}
                placeholder="Enter a player's name" 
                onChange={(e) => setValue(e.target.value)}
            />
            <input 
                type="submit" 
                value="Add Player" 
            />
        </form>
    );
}

export default AddPlayerForm;