import React, {useState} from "react";

function AddPostForm({addNewPost}) {
    const [newTitle, setNewTitle] = useState('')  //tengo traccia del'input

    //funzione per gestire il cambiamento dell'input
    const handleInputChange = (event) => {
        setNewTitle(event.target.value);
    }
}

// funzione per gestire il submit del form

const handleSubmit = (event) => {
    event.preventDefault(); 
    
}