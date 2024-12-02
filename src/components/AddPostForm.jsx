import React, {useState} from "react";

function AddPostForm() {
    const [newTitle, setNewTitle] = useState('')  //tengo traccia del'input

    //funzione per gestire il cambiamento dell'input
    const handleInputChange = (event) => {
        setNewTitle(event.target.value);
        console.log('valore aggiornato', event.target.value);
    }

    return(
        <form>
            <input 
            type="text"
            value={newTitle}
            onChange={handleInputChange}
            placeholder="Inserisci il titolo del nuovo posts "
            />
        </form>
    );
}

 export default AddPostForm;
