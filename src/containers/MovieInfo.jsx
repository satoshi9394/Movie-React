import React, { Component } from "react"
import Link from 'react-router-dom'

//Components
import MovieMain from "../components/MovieMain";
import Btn from "../components/Btn";

//Config
import configServices from '../utils/config';



/* https://api.themoviedb.org/3/movie/popular?api_key=0d59c137d4b1775154cc094577fbe290&language=en-US&page=1
https://api.themoviedb.org/3//movie/popular?api_key=0d59c137d4b1775154cc094577fbe290&language=en-US&page=1 */

class MovieDirectory extends Component {
    
    constructor(props){
        super(props)
        this.state = {
        movieData:[],
        load: false,
        pages: 1,
        id: this.props.id,
        newMovieData:[]
        }
    }

    componentDidMount() {
        const url = `${configServices.apiUrl}movie/${this.state.id}?api_key=${configServices.apiKey}&language=en-US&page=1`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movieData: data,
                    load: true
                });
            });
    }

    render() {
        //let card;
        console.log(this.state.movieData)
        let mainCard;
/*         if (this.state.load === true) {
            card = this.state.movieData.map((movie, idx) => 
            <MovieMain movie={movie} key={idx}/> );        
        }else{
            console.log('aun no llega la info')
        } */


        console.log(this.state.movieData)
        return(
            <div className='row'>
                <MovieMain movie={this.state.movieData}/>
            </div>
        );
    }


} 


export default MovieDirectory;