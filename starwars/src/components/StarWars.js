import React from 'react';
import './StarWars.css';

function StarWars(props) {
    return (
        <div className='char-cont'>
            <div className='char-head'>
                <h2>Name: {props.char.name}</h2>
            </div>
            <div className='attr'>
                <p>Gender: {props.char.gender}</p>
                <p>Birth Year: {props.char.birth_year}</p>
                <p>Height: {props.char.height}</p>
                <p>Eye Color: {props.char.eye_color}</p>
                <p>Hair Color: {props.char.hair_color}</p>
                <p>Skin Color: {props.char.skin_color}</p>
                <p>Mass: {props.char.mass}</p>
            </div>
        </div>
    );
}

export default StarWars
