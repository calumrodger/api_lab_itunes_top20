import React from 'react'



const GenreSelector = ({genres, onGenreClick}) => {

    const genreList = [{name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
{name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
{name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
{name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}]

    const handleChange = function(event){
        const chosenGenre = genreList[event.target.value];
        onGenreClick(chosenGenre);
    }

    const genreOptions = genreList.map((genre, index) => {
        return <option value={index} key={index}>{genre.name}</option>
    })

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="">Genre Selecta</option>
            {genreOptions}
        </select>
    )
}

export default GenreSelector;