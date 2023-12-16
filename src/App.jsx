import React from 'react';
import Home from './Home';
import Reservation from './Reservation';
import Formu from './components/Formu';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route element={<Home/>} path='/' exact/>
          <Route element={<Reservation/>} path='/Booking'/>
          <Route element={<Formu/>} path='/Booking/Infos'/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
