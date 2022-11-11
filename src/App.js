import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
import Details from './components/Details';

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starChar,setStarChar] = useState(null);
  const [buttons, setButtons]= useState(null)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const openDetails = id =>
  {
      const character = starChar.filter(item => item.id === id);
      setButtons(character);
  };

  const closeDetails = () =>
  {
      setButtons(null);
  };



  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setStarChar(res.data.results);
      setStarChar(res.data);

      const characters = res.data;

                let id = 1;
                characters.forEach(item => item.id = id++);
                console.log(characters);
                setStarChar(characters);
    })
    .catch(err => {
      console.error(err)
    })
  }, []);




  const StarDiv = styled.div`
  margin: 1
  width: 45%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  }
  
`

  return (
    <div className="App">
    <h1 className="Header">Characters</h1>
    <StarDiv>
    {
       starChar &&
       starChar.map(info =>
       {
           return <Character key={info.name}
               info={info}
               openDetails={openDetails}
               closeDetails={closeDetails} />;
       })
   }
   {
       buttons && <Details info={buttons} closeDetails={closeDetails} />
    }
    </StarDiv>
    </div>
  );
};
export default App;