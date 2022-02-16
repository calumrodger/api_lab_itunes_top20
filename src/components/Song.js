import React from 'react';
import './Song.css'

const Song = ({song, index}) => {


    return (
    <>
    <ul>
        <p>{song.position}: {song['im:name'].label}</p>
        <p>{song['im:artist'].label}</p>
        <img src={song['im:image'][2].label}/>
    </ul>
    </>
    )}

export default Song;