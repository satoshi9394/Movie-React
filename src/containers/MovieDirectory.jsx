import React, { Component } from "react"

//Components
import MovieHome from "../components/MovieHome";
import MovieCards from "../components/MovieCards";

//Config
import configServices from '../utils/config';
import Btn from "../components/Btn";


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
    addMovieMain= (e) => {
        let value = e.target.id;
        let name = e.target.name;
        console.log(value)
        console.log(name)
        this.setState(()=>({
            id: value,
            idMovie: name
        }))

    }

    render() {
        //let movieData = this.state.movieData.results; 
        let card;
        let mainCard
        if (this.state.load === true) {
            card = this.state.movieData.map((movie, idx) => 
            <MovieCards movie={movie} value={idx} name={movie.id} key={idx} clickHandler={this.addMovieMain}/> );
            mainCard = <MovieHome movie={this.state.movieData[this.state.id]}/>
        
        }else{
            console.log('aun no llega la info')
        }


        console.log('hola')
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