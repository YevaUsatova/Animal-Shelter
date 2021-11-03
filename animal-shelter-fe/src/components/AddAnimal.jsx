import React, {useState} from "react"
import "./AnimalsForm.css"

export default function AddAnimal({addAnimal}){
    const [form, setForm]= useState({
        name: " ",
        species: " ",
        age: " "
    })

    function handleChange (e){
        setForm ({
                ...form,
                [e.target.name]: e.target.value
           })
    }

    const handleSubmit= (e)=> {
        e.preventDefault()
        addAnimal(form)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Animals Name</label>
                <input className= "animalsForm" name="name" onChange = {handleChange} type="text" value = {form["name"]}></input>
                <label htmlFor="species">Animals species</label>
                <input className= "animalsForm" name= "species" onChange = {handleChange} type="text" value = {form["species"]}></input>
                <label htmlFor="age">Animals Age</label>
                <input className= "animalsForm" name="age" onChange = {handleChange} type="text" value = {form["age"]}></input>
                <button type="submit">Save me</button>
            </form>  
        </div>
    )
}