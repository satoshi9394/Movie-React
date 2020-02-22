import React, { Component } from "react"
//Components
import MovieMain from '../components/MovieMain';
import ExtraInfo from '../components/ExtraInfo';
//Config
import configServices from '../utils/config';

class MovieDirectory extends Component {
    
    constructor(props){
        super(props)
        this.state = {
        movieData:[],
        load: false,
        id: this.props.id,
        moviePeople:[],
        directors:[{}]
        }
    }

    componentDidMount() {
        const url = `${configServices.apiUrl}movie/${this.state.id}?api_key=${configServices.apiKey}&language=en-US`
        const urlPeople =`${configServices.apiUrl}movie/${this.state.id}/credits?api_key=${configServices.apiKey}&language=en-US`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movieData: data,
                    load: true
                });
            });
        fetch(urlPeople)
        .then(response => response.json())
        .then(data => {
            this.setState({moviePeople: data.cast,});
            const directors = data.crew.filter(
                member => member.job === "Director"
              );
            this.setState({directors: directors,});
        });
    }

    render() {
        let mainCard;
        let time;
        let budget;
        let revenue
        if (this.state.load === true) {       
            mainCard = <MovieMain movie={this.state.movieData} directors={this.state.directors}/>   
            time = <ExtraInfo icon='timer' movie={this.state.movieData} type='time' title='Runnig Time:'/>
            budget = <ExtraInfo icon='monetization_on' movie={this.state.movieData} type='budget' title='Budget'/>
            revenue = <ExtraInfo icon='receipt' movie={this.state.movieData} type='revenue' title='revenue'/>
        }
        
        return(
            <div className='row'>
                <div className="col s12">
                    {mainCard}
                </div>
                <div className="col s4">
                    {time}
                </div>
                <div className="col s4">
                    {budget}
                </div>
                <div className="col s4">
                    {revenue}    
                </div>                
            </div>
        );
    }


} 


export default MovieDirectory;