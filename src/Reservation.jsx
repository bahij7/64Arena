import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'C:/CodeBoi/64arena/src/style.css';
import NavbarR from './components/NavbarR';
import Sub from './components/sub/Sub';


function Reservation() {
  useEffect(() => {
    document.title = '64 Arena - Book Now!';
  }, []);

  return (
    <div>
      <NavbarR/>

      <div className="mainR">
        <div className='one-gameR'>
          <Sub title={"One Time Game Pass"} info={"The One-Time Game Pass allows you to attend a single football game at our stadium. It's a perfect choice if you want to experience the excitement of one game."} plus={<li>90Min (including the halftime break and the players preparation)</li>} price={"160 MAD"} oldPrice={"200 MAD"} button={"Book Now!"} />
        </div>

        <div className='weeklyR'>
          <Sub title={"Weekly Game Bundle"} info={"The Weekly Game Bundle offers access to three stadium football games in one week, perfect for those seeking more action in less time."} plus={<li>90Min (including the halftime break and the players preparation)</li>} plus2={<li>Many features (footballs, two different t-shirt colors for both teams, and a referee to enhance your football experience.)</li>} price={"480 MAD"} oldPrice={"600 MAD"} button={"Subscribe Now!"} />
        </div>

        <div className='monthlyR'>
          <Sub title={"Monthly Game Subscription"} info={"The Monthly Game Subscription gives dedicated football fans access to ten stadium games in a month, simplifying the ticket-buying process."} plus={<li>120Min (including the halftime break and the players preparation)</li>} plus2={<li>Many features (footballs, two different t-shirt colors for both teams, a referee, and power water to enhance your playing experience with our partner (Powered).)</li>} price={"1600 MAD"} oldPrice={"2000 MAD"} button={"Subscribe Now!"} />
        </div>
        </div>

    </div>
  );
}

export default Reservation;
