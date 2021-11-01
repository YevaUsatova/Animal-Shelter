import React from "react"

export default function AnimalCard({animals}){
    return (
        <div>
           
            {animals.name}- {animals.species} - {animals.age}
        </div>
    )
}