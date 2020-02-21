import React, { Component } from "react"

//Components
import MovieHome from "../components/MovieHome";
import MovieCards from "../components/MovieCards";

//Config
import apiData from '../utils/movieData'


/* https://api.themoviedb.org/3/movie/popular?api_key=0d59c137d4b1775154cc094577fbe290&language=en-US&page=1
https://api.themoviedb.org/3//movie/popular?api_key=0d59c137d4b1775154cc094577fbe290&language=en-US&page=1 */

class MovieDirectory extends Component {
    state = {
        movieData:{},
        load: false,
    }

    componentDidMount() {
        
        apiData()
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movieData: data,
                    load: true
                });
            });
    }

    render() {
        let movieData = this.state.movieData.results; 
        console.log(movieData)
        let card;
        let mainCard
        if (this.state.load === true) {
            card = movieData.map((movie, idx) => 
            <MovieCards movie={movie}  key={idx}/> );
            mainCard = <MovieHome movie={movieData[0]}/>
        
        }else{
            console.log('aun no llega la info')
        }


        console.log('hola')
        return(
            <div className='row'>
                {mainCard}
                {card}
            </div>
        );
    }


} 


export default MovieDirectory;