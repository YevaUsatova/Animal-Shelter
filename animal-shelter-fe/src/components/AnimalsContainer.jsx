import React from "react"
import AnimalCard from "./AnimalCard"

export default function AnimalsContainer({animal, handleDelete}){
    return (
        <div id="welcome">
            <h1 id="text">Check out those amazing fluffy friends</h1>
            {animal.map(paws => <AnimalCard key={paws.id} animals={paws} handleDelete={handleDelete}/>)}
        </div>
    )
}