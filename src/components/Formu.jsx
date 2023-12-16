import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Formu() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [isDone, setisDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();


    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      setisDone(true);

      setTimeout(() => {
        setisDone(false);

        navigate('/');
      }, 10000);
    }, 4000);
  };


   const [formData, setFormData] = useState({
    fname: '',
    cni: '',
    email: '',
    city: '',
    dateR: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetInputs = ()=>{
    setFormData({
      fname: '',
      cni: '',
      email: '',
      city: '',
      dateR: '',
    });
  }
  
  return (
    <div className="parent-form">
      <div className="form">
        <p>Please fill this form carefully!</p>
        <form onSubmit={handleSubmit}>

          <input type="text" name="fname" id="fname" value={formData.fname} placeholder="Full Name*" onChange={handleChange} required/>
          <input type="text" name="cni" id="cni" value={formData.cni} placeholder="CNI*" onChange={handleChange} required/>
          <input type="email" name="email" id="email" value={formData.email} placeholder="Email*" onChange={handleChange} required/>
          <input type="text" name="city" id="city" value={formData.city} placeholder="City Where You Live" onChange={handleChange} />
          <input type="datetime-local" name="dateR" id="dateR" value={formData.dateR} onChange={handleChange} required/>

          <input type="submit" value="Book Now!" id="submit" />
          <input type="reset" value="Reset" id="reset" onClick={resetInputs}/>
        </form>
      </div>
      
<div className="home"><Link to="/">BACK HOME</Link></div>

      {showPopup && (
        <div className="popup">
          <p>Please wait a minute..</p>
        </div>
      )}

      {isDone && (
        <div className="popup">
          <p>Reservation done, please check your email as soon as possible!</p>
        </div>
      )}
    </div>
  );
}

export default Formu;
