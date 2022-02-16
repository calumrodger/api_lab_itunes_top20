import React from 'react';
import Song from './Song';
import GenreSelector from '../components/GenreSelect';

const SongList = ({songs}) => {

    const songListItems = songs.map((song, index) => {
        return <Song song={song} key={index} position={index +1}/>
    })

    return (
        <div>
            <ul>
                {songListItems}
            </ul>
        </div>
    )
}

export default SongList;

