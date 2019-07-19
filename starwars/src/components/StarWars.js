import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div `
border: 3px dashed black;
margin: 4px;
max-width:350px;
max-height:350px;
padding:5px;
`
const StyledDiv2 = styled.div `
display:flex;
flex-direction: row;
flex-wrap:wrap;
`

const StarWarsCard = (props) => {
    console.log(props)
    return ( 
        <div>
            {props.characters.map(name => {
               return(
                   <StyledDiv2>
                   <StyledDiv key={name.name}>
                       <h1>{name.name}</h1>
                       <h2>Gender: {name.gender}</h2>
                       <h3>Mass: {name.mass}</h3>
                       <h4>BirthYear: {name.birth_year}</h4>
                   </StyledDiv>
                   </StyledDiv2>
               );
            })}
        </div>
     );
}
 
export default StarWarsCard;