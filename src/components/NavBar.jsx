import React from 'react'
import { Link } from 'react-router-dom'

//config
import configServices from '../utils/config'



function NavBar() {
    return(
        
        <nav>
            <div className="row  cyan darken-4">
                <div className="col s3">
                    <a href="https://www.themoviedb.org/" target='_blank'>
                    <img src={configServices.imgLogMovie} 
                    alt="Logo peli"
                    className='valign-wrapper' 
                    id='LogNav'/>
                    </a>                
                </div>
                <div className="col s2 pull-s1">
                    <h4 className='valign-wrapper'>Movie-React</h4>
                </div>
                <div className="col s1 offset-s5">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="/"><h5 className='valign-wrapper'>Home</h5></Link></li>
                    </ul>
                </div>
                <div className="col s1">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="/"><h5 className="large material-icons">home</h5></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default NavBar