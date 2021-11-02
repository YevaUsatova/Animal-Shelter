import React from "react"
import { NavLink } from "react-router-dom"

export default function AnimalCard({animals, handleDelete}){
    return (
        <div>
            <NavLink to={`/animal/${animals.id}`}>{animals.name}</NavLink> - {animals.species} - {animals.age}
            <br></br>
            <p>Likes: {animals.likes}</p>
            <button onClick={ handleDelete(animals.id)}>Delete</button>    
        </div>
    )
}