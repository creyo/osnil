import React from 'react';
import './App.css';
import Password from './Component/Password';
import CardPage from './Component/CardPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Html from './Component/Html';

function App() {
  // Check if a token exists in the session storage and if it equals "i am authenticated person"
  const token = sessionStorage.getItem('token');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Password />} />
          <Route
            path="/"
            element={
              token === 'i am authenticated person' ? <CardPage /> : <Navigate to="/Login" />
            }
          />
          <Route path ='/html' element ={<Html/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
