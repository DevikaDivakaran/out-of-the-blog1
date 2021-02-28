import React from 'react';
import {Link} from 'react-router-dom' //used for routing to the pages
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg' //getting logo file
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => (
    <div className = "header" >
        <div className = "container-sm" >
        
            <div className="options">
                <Link className="option" to="/show">Trending </Link>  
                <Link className="option" to="/show">Archive </Link>  
                <Link className="option" to="/show">Contact Us </Link> 
            </div>
        </div>
    </div>
)

export default Header;