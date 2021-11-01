import React, {useState} from "react"
import "./AnimalsForm.css"

export default function AddAnimal({addAnimal}){
    const [form, setForm]= useState({
        name: "",
        species: "",
        age: 0
    })

    const handleChange = (e) =>{
        setForm ((prev) => {
            return{
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit (e) {
        e.preventDefault()
        addAnimal(form)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className= "animalsForm" name="name" onChange = {handleChange} type="text" value = {form["name"]}></input>
                <input className= "animalsForm" name= "species" onChange = {handleChange} type="text" value = {form["species"]}></input>
                <input className= "animalsForm" name="age" onChange = {handleChange} type="integer" value = {form["age"]}></input>
                <button type="submit">Save me</button>
            </form>  
        </div>
    )
}