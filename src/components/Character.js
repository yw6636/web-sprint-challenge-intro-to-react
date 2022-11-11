import React from 'react';
import styled from 'styled-components';

const StarwarsStyle = styled.div`
justify-content:center;
`

const StarStyleBox = styled.div`
margin:10% 15% 0;
background-color:chocolate;
border: solid black 3px;
padding:10%;
`

const Character = props => {
    const {info} =props
    return (
        <StarwarsStyle>
            <h1>{info.name}</h1>

            <p><b>{info.name}</b> was born in {info.birth_year}. 
            They are {info.height}km tall.</p>
        </StarwarsStyle>
    )
}
export default Character;