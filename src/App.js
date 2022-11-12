import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
import Details from './components/Details';
import './App.css';

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starChar ,setStarChar] = useState([]);
  const [buttons, setButtons]= useState()
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const openDetails = id =>
  {
      const character = starChar.filter(item => item.id === id);
      setButtons(id);
  };

  const closeDetails = () =>
  {
      setButtons(null);
  };

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setStarChar(res.data.results);
      console.log('res', res.data.results);

    }).catch(err => console.error(err))
  }, []);

  

console.log('starChar', starChar)
  return (
    <div className="App">
    <h1 className="Header">Characters</h1>
    { starChar.map(character =>{
           return <Character info={character} key={character.name} openDetails={openDetails}/>;
       })
   }
   {/* {
       starChar && 
      <Details  
       name={starChar[0]} 
      //  year={starChar.birth_year} 
      //  eyeColor={starChar.eye_color} 
      //  hairColor={starChar.hair_color}   
       close={closeDetails} 
       />
    } */}
    </div>
  );
}
export default App;