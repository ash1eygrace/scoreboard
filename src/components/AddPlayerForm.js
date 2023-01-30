import React, {useState} from "react";

const AddPlayerForm = () => {
    const [value, setValue] = useState("");

    return (
        <form>
            <input 
                type="text" 
                placeholder="Enter a player's name" 
            />
            <input 
                type="submit" 
                value="Add Player" 
            />
        </form>
    );
}

export default AddPlayerForm;