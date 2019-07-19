import React, {useEffect, useState} from 'react';
import StarWarsCard from './components/StarWars';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';


const StyledDiv1 = styled.div`
border: 1px dashed black;
margin: 4px;
padding:5px;
display:flex;
`

const App = () => {
  const [characters, setCharacters] = useState([])

useEffect(() => {
  axios.get('https://swapi.co/api/people/')
  .then(res => {
    setCharacters(res.data.results)
  })
  .catch(err => {
    console.log('An error has occured', err)
  })
}, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  console.log(characters)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StyledDiv1>
      <StarWarsCard characters={characters} />
      </StyledDiv1>
    </div>
  );
}

export default App;
