import React, { useState } from 'react';
import 'C:/CodeBoi/64arena/src/style.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Formu from '../Formu';

function Sub(props) {


  return (
    <div>
      <div>
        <div className="titleR">{props.title}</div>
        <div className="infoR">{props.info}</div>

        <div className="plusR">
          <ul>
            {props.plus}
            {props.plus2}
            {props.plus3}
          </ul>
        </div>

        <div className="priceR">
          <p>{props.price}</p><span>{props.oldPrice}</span>
        </div>
        <Link to="/Booking/Infos" className='button'>{props.button}</Link>
        {/* <button id="button">{props.button}</button> */}
      </div>
    </div>
  );
}

export default Sub;
