import React from "react"

export default function ShelterContainer({shelter}){
    
    return (
        <div>
           <h3>"Those are some Shelters"</h3> 
            <ul>{shelter.map((shelters)=> 
               <h6>{shelters.name} - {shelters.location}</h6>
            )}
            </ul>
        </div>
    )
}