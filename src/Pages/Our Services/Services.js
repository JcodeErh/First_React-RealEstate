import React from 'react'
import './Services.css'

import Button from "../Blog/Button";
import {Link, useNavigate} from 'react-router-dom';



function Services() {

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/contact");
  };

  return (
    <div className="boxbox">
    
    <div className="services" />
    
    <div className="textOverall">     
      <h2 className="H2"> OUR SERVICES</h2> 
      The cornerstone of Real Estate Gothenburg is the provision of 
      concierge real estate services to all of our clients. 
      Working as a team allows us to offer a hands-on approach to every aspect of every transaction.  
      Our goal is to alleviate the stress of selling and buying a home by providing expert guidance every step of the way.                
    
   
    <div className="textSecond">
      <h3 className="H3"> SELLING</h3> 
      We will provide a detailed market analysis to properly price your property 
      and coordinate the best possible terms to sell your home for the highest price 
      in the least amount of time. Listings with Us include:

      Property Preparation - To sell well, a house has to show well.  Utilizing our wide network of industry service providers, along with our experience and strong market knowledge, we coordinate the best preparation of your property for sale.
      <br />Property photos - We hire only the top photographers in the industry to take high quality, 
      stunning photos of your property for use in our extensive, customized marketing campaign. 
  </div>

  <div className="col-md-auto p-4">
            <Button className="btn btn-primary" type="submit" onClick={onClick}>
              Contact us
            </Button>
          </div> 
  </div>
  </div> 
  )
}

export default Services