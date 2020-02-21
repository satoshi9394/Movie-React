import React, { Component } from "react"

//Components
import MovieHome from "../components/MovieHome";
import Btn from "../components/Btn";

//Config
import configServices from '../utils/config';



/* https://api.themoviedb.org/3/movie/popular?api_key=0d59c137d4b1775154cc094577fbe290&language=en-US&page=1
https://api.themoviedb.org/3//movie/popular?api_key=0d59c137d4b1775154cc094577fbe290&language=en-US&page=1 */

class MovieDirectory extends Component {
    state = {
        movieData:[],
        load: false,
        pages: 1,
        id: 0,
        newMovieData:[]
    }

    componentDidMount() {
    }


    render() {



        console.log('hola')
        return(
            <div className='row'>

            </div>
        );
    }


} 


export default MovieDirectory;