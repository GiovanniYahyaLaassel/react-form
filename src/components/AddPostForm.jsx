import React, {useState} from "react";

function AddPostForm({ addNewPost }) {
    const [newTitle, setNewTitle] = useState('')  //tengo traccia del'input

    //funzione per gestire il cambiamento dell'input
    const handleInputChange = (event) => {
        setNewTitle(event.target.value);
        console.log('valore aggiornato', event.target.value);
    }

    // funzione per gestire il submit
    const  handleSubmit = (event) => {
        // evito il refresh
        event.preventDefault();

        if (newTitle.trim() !== "") { // rimuovo gli spazi bianchi nella stringa 
            addNewPost(newTitle); 
            setNewTitle(""); // resetto  il campo
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={newTitle}
            onChange={handleInputChange}
            placeholder="Inserisci il titolo del nuovo posts "
            />
            <button type="submit">Aggiungi Post</button>
        </form>
    );
}

export default AddPostForm;
