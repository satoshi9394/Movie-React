import React from 'react'

import MovieInfo from '../containers/MovieInfo'


const DirectoryPages = (props) => {
    const { params } = props.match;

    return(
        <MovieInfo id={params.id}/>
    )
}

export default DirectoryPages;