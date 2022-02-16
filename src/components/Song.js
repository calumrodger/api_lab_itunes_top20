import React from 'react';
import GenreSelector from '../components/GenreSelect';

const Song = ({song}) => {


    return (
    <>
    <li>
        <p>{song['im:name'].label}</p>
        <p>{song['im:artist'].label}</p>
        <img src={song['im:image'][2].label}/>
        <p>{song.position}</p>

    
    </li>
    </>
    )}

export default Song;