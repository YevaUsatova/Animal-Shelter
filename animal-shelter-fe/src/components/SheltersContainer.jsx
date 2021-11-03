import React from "react"

export default function ShelterContainer({shelter}){
    
    return (
        <div id="welcome">
           <h5 id="text">Those are some Shelters where you can get the best friend...</h5> 
            <ul>{shelter.map((shelters)=> 
               <h6 id="text" key ={shelter.id}>{shelters.name} - {shelters.location}</h6>
            )}
            </ul>
        </div>
    )
}