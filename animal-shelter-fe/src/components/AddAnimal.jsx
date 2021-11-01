import React, {useState} from "react"

export default function AddAnimal({addAnimal}){
    const [form, setForm]= useState({
        name: "",
        species: "",
        age: 0
    })
    return (
        <div>
            <form>

            </form>  
        </div>
    )
}