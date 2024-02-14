import { BrowserRouter, Routes, Route,  } from "react-router-dom";//Navigate
//import { useState, useEffect } from "react";
import './App.css';
import Register from "./Component/Register";
import CardPage from "./Component/CardPage";

function App() {
 // const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage authentication status

  // Check if a token exists in the session storage
  // useEffect(() => {
  //   const token = sessionStorage.getItem('token');
  //   if (token) {
  //     setIsLoggedIn(true); // User is logged in if a token exists
  //   }
  // }, []);

  // Function to handle user logout
  // const handleLogout = () => {
  //   sessionStorage.removeItem('token'); // Clear token from session storage
  //   setIsLoggedIn(false); // Update authentication status
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Register />} />
          {/* <Route path="/" element={<PrivateRoute isLoggedIn={isLoggedIn} />} /> */}
          <Route path="/" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// // PrivateRoute component to guard private routes
// const PrivateRoute = ({ isLoggedIn }) => {
//   return isLoggedIn ? <CardPage /> : <Navigate to="/Login" replace />;
// };

export default App;
