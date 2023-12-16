import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'C:/CodeBoi/64arena/src/style.css';
import PromoSub from './sub/PromoSub';

function Promo(){
    return(
        <div className="promo">

            <div className="promo-head">

                <p>Get Ready for the Grand Kickoff – Explore Our Discounted Plans for the Opening! 🎉🎁</p>
                <div className="promo-link">
                    <Link to="/Booking">Know more about our plans!</Link>
                </div>

            </div>

            <div className="subs">
            
                <div className="one-game">
                    <PromoSub title='One Time Game Pass' infos="The One-Time Game Pass allows you to attend a single football game at our stadium. It's a perfect choice if you want to experience the excitement of one game."/>
                </div>
            
                <div className="weekly">
                    <PromoSub title='Weekly Game Bundle' infos="The Weekly Game Bundle grants you access to three exciting football games at our stadium over the course of one week. This plan is ideal for those looking for a bit more football action in a shorter timeframe."/>
                </div>
            
                <div className="monthly">
                    <PromoSub title='Monthly Game Subscription' infos="The Monthly Game Subscription offers you access to a total of ten football games at our stadium throughout a month. It's the ultimate choice for dedicated football enthusiasts who want to enjoy numerous games without worrying about individual ticket purchases."/>
                </div>

            </div>

        </div>
    )
}

export default Promo;
