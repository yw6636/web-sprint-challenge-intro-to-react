import React from 'react';
import styled from 'styled-components';

const StarwarsFormat = styled.div`
justify-content:center;
`


const Character = props => {
    const {info} =props
    return (
        <StarwarsFormat>
            <h1>{info.name}</h1>

            <p><b>{info.name}</b> was born in {info.birth_year}. 
            They are {info.height}cm tall.</p>
        </StarwarsFormat>
    )
}
export default Character;