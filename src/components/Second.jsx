import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'C:/CodeBoi/64arena/src/style.css';

function Second(){
    return(
        <div className="second-section">

        <div className="left-side">
           <span>Play in 64 Arena! ⚽</span>
           <p>Discover the ultimate football destination in <span className="details">Morocco, Guelmim!</span> With 7-day access, <span className="details">from 7 AM to 10 PM </span>, you can play whenever your heart desires. Embrace the joy of the beautiful game on our immaculate field, surrounded by the passionate energy of fellow football lovers. Don't wait any longer – visit us ASAP and make your football dreams a reality!</p>
           <Link to="/Booking" className='slogan'>Make a Reservation</Link>
        </div>
        <div className="right-side">
        </div>
        
     </div>
    )
}

export default Second;