import React from "react"
import AnimalCard from "./AnimalCard"

export default function AnimalsContainer({animal, handleDelete}){
    return (
        <div>
            <h1>Animals</h1>
            {animal.map(paws => <AnimalCard key={paws.id} animals={paws} handleDelete={handleDelete}/>)}
        </div>
    )
}