import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Character  from './components/Character'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacter]= useState([])
  useEffect(() => {
  axios.get('https://swapi.dev/api/people/')
    .then(response => {
    setCharacter(response.data)
  })
  .catch(error => {
    console.log('error.there is a data issue')
  })
}, [])


  return (
    <div className="App">
      <h1 className="Header">REACT WARS </h1>      
      <Character character={character}/>
    </div>
  );
}

export default App;
