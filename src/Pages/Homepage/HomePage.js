import React from 'react'
import "./Homepage.css";
import ReusableButton from '../../Components/ReusableButton';
import {Link} from 'react-router-dom';
import Footer from '../../Components/Footer';
 
 export default function HomePage() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
};
   return (
     <div className='homeP-container'>
       <div className='eye-catcher-text'>VIEW THE EXTRAORDINARY</div>
       <div className='text-headline'>Homes in Gothenburg</div>
       <div className='hero-text-homepage'>
        Welcome to Real Estate Gothenburg.
        The place where you will find your dream home. <br />We provide worldclass services.
        </div>
       <li className='view-properties'><Link style={navStyle} to="/Homes"><ReusableButton>View our Properties</ReusableButton></Link></li>
     </div>
     
   )
 }

