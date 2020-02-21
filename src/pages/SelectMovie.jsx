import React from 'react'

import MovieInfo from '../containers/MovieInfo'


const DirectoryPages = (props) => {
    const { params } = props.match;
    console.log(`${params.id}`)
    return(
        <MovieInfo id={params.id}/>
    )
}

export default DirectoryPages;