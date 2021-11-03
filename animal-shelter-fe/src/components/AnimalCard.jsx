import React from "react"

export default function AnimalCard({animals, deleteAnimal}){
    function handleDelete( id){
        fetch(`http://localhost:9393/animal/${id}`, {
        method: "DELETE",
        })
        deleteAnimal(id)
    }
    return (
        <div>
            {animals.name} - {animals.species} - {animals.age}
            <br></br>
            <button className="waves-effect waves-light btn" onClick={()=>handleDelete(animals.id)}>Delete</button>    
        </div>
    )
}