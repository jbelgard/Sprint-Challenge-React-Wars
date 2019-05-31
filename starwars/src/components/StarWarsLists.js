import React from 'react';
import StarWars from './StarWars';
import './StarWars.css';

function StarWarsLists(props) {
    console.log(props);
    return (
        <div clasName='container'>
            {props.starwarsChars.map((char) => {
                return <StarWars char={char} />
            })}
        </div>
    );
}

export default StarWarsLists
