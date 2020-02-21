import React, { Component } from "react"

//Components
import MovieHome from "../components/MovieHome";
import MovieCards from "../components/MovieCards";

//Config
import configServices from '../utils/config';
import Btn from "../components/Btn";

class MovieDirectory extends Component {
    state = {
        movieData:[],
        load: false,
        id: 0,
        pages: 1,
        newMovieData:[]
    }

    componentDidMount() {
        const url = `${configServices.apiUrl}movie/popular?api_key=${configServices.apiKey}&language=en-US&page=1`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movieData: data.results,
                    load: true,
                });
            });
    }

    handleFormSubmmit = (e) =>{
        e.preventDefault();
        const url = `${configServices.apiUrl}movie/popular?api_key=${configServices.apiKey}&language=en-US&page=${this.state.pages + 1}`
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    newMovieData: data.results,
                });
            });
        this.setState(
            () => (this.state.pages= this.state.pages + 1)
        )
    }


    render() {
        let card;
        let mainCard
        if (this.state.load === true) {
            card = this.state.movieData.map((movie, idx) => 
            <MovieCards movie={movie} name={movie.id} key={idx}/> );
            mainCard = <MovieHome movie={this.state.movieData[this.state.id]}/>
        
        }


        return(
            <div className='row'>
                {mainCard}
                {card}
                <Btn clickHandler={this.handleFormSubmmit} type="Mostrar mas peliculas" icon="add"/>
            </div>
        );
    }


} 


export default MovieDirectory;