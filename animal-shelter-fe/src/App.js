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
  //const[request, setRequest]= useState(true)
  
  useEffect(()=> {
    fetch("http://localhost:9393/animals")
    .then (r=> r.json())
    .then (data=> setAnimal([...data])
    )
  }, [])

  const newAnimal =(e) => {
    e.preventDefault();
    let params ={
      animals: {...animal}
    }
    fetch("http://localhost:9393/animal", {
      method: "POST",
      headers: {
        "Acept": "application/json",
        "Content-Type": "application/jason",
      },
      body: JSON.stringify(params)
    }).then(r => r.json())
    .then(newData => {
      setAnimal(prev => {
        return [...prev, newData]
      })
    })
  }
  return (
    <div>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/"><Welcome/></Route>
          <Route exact path= "/animal"><AnimalsContainer animal= {animal} /></Route>
          <Route path="/shelter"><SheltersContainer/></Route>
          <Route  path="/animal/new"><AddAnimal addAnimal= {newAnimal}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
