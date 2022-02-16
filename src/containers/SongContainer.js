import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';
import Song from '../components/Song';
import GenreSelector from '../components/GenreSelect';

import './SongContainer.css';

const SongContainer = (genreList) => {
    const [songs, setSongs] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function(){
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    const onGenreClick = function(genre){
        setSelectedGenre(genre.url)
        fetch(genre.url)
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    return (
        <div className="main-container">
        <GenreSelector genres={genreList} onGenreClick={onGenreClick}/>
            {songs ? <SongList songs={songs}/> : null}
        </div>
    )
}

export default SongContainer;
