import React from 'react';
import StarWars from './StarWars';
import './StarWars.css';

function StarWarsLists(props) {
    console.log(props);
    return (
        <div className='container'>
            {props.starwarsChars.map((char) => {
                return <StarWars key={char.name} char={char} />
            })}
        </div>
    );
}

export default StarWarsLists
