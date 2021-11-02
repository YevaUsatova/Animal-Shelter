import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import React, {useState, useEffect} from "react"
import Welcome from './components/Welcome';
import AnimalsContainer from './components/AnimalsContainer';
import SheltersContainer from './components/SheltersContainer';
import NavBar from './components/NavBar';
import AddAnimal from './components/AddAnimal'

function App() {
  const[animal, setAnimal]= useState([])
  const[shelter, setShelter]= useState([])
  const[request, setRequest]= useState(true)
  
  useEffect(()=> {
    fetch("http://localhost:9393/animals")
    .then (r=> r.json())
    .then (data=> setAnimal([...data])
    )
  }, [])

  
  useEffect(()=> {
    fetch("http://localhost:9393/shelters")
    .then (r=> r.json())
    .then (data=> setShelter([...data])
    )
  }, [])
 
  
  const newAnimal =(data) => {
    setRequest(true);
    let params ={
      ...data
    }
    fetch("http://localhost:9393/animal", {
      method: "POST",
      headers: {
        "Acept": "application/json",
        "Content-Type": "application/jason",
      },
      body: JSON.stringify(params)
      }).then(r => r.json())
      .then(data => {
      setAnimal(prev => {
        return [...prev, data]
      })
      setRequest(false)
    })  
  }

  const handleDelete = async ( id) => {
    setRequest(true);
    fetch(`http://localhost:9393/animal/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"       
          }
    })
    let animalAfterDelete = animal.filter(animals => animals.id !== id)
    setAnimal([...animalAfterDelete])
    setRequest(false);
  }
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/"><Welcome/></Route>
          <Route exact path= "/animal"><AnimalsContainer request={request} animal= {animal} handleDelete={handleDelete} /></Route>
          <Route path="/shelter"><SheltersContainer shelter={shelter} /></Route>
          <Route  path="/animal/new"><AddAnimal addAnimal= {newAnimal}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

