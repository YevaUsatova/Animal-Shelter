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
        "Acepts": "Application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(params)
      })
      .then(r => r.json())
      .then(data => {
      setAnimal([...animal, data])
      setRequest(false)
    })  
  }

  function deleteAnimal(id){
    let animalAfterDelete = animal.filter(animals => animals.id !== id)
    setAnimal(animalAfterDelete)
  }
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/"><Welcome/></Route>
          <Route exact path= "/animal"><AnimalsContainer request={request} animal= {animal} deleteAnimal={deleteAnimal} /></Route>
          <Route path="/shelter"><SheltersContainer shelter={shelter} /></Route>
          <Route  path="/animal/new"><AddAnimal addAnimal= {newAnimal}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

