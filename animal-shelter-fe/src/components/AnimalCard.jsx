import React from "react"

export default function AnimalCard({animals, handleDelete}){
    
    return (
        <div>
            {animals.name} - {animals.species} - {animals.age}
            <br></br>
            <button className="waves-effect waves-light btn" onClick={()=>handleDelete(animals.id)}>Delete</button>    
        </div>
    )
}