import React from "react";
import './About.css';
import commercialImage from './jimmy-dean-Qngdf0kgGB4-unsplash.jpg'


const About = () => {

    const imageStyle = {

    };


  return (
    <div className="about-container">
    <img style={imageStyle} src={commercialImage}/>
        <div className="about-text">
            <div className="about-headline">
                REAL ESTATE GOTHENBURG
            </div>
            <div className="about-text-paragraph">
              
                At Real Estate, you are met by brokers who are service-oriented,
                goal-oriented and extremely driven in the profession. We work individually according to where
                customer's specific requirements and we are not satisfied until you are satisfied.
            </div>
            <div className="about-text-paragraph">
               
            For us, there are no boundaries. We sell everywhere where the items are both in Sweden and abroad.
            </div>
            <div className="about-text-paragraph">
            After long experience with many years in the profession, Real Estate guarantees good quality.
                We have the energy and we take the meeting with the customer as a challenge to really understand and create security in the process.
                Our returning customers are the ultimate proof that we have succeeded.
            </div>
            <div className="about-text-paragraph">
            And trust us; We know the market
            </div>
            <div className="about-text-paragraph">
                Your dream, our vision 
            </div>
        </div>
    </div>
  )
}
export default About;
