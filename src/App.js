import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Password from "./Component/Password";
import CardPage from "./Component/CardPage";

function App() {
  // Check if a token exists in the session storage and if it equals "i am authenticated person"
  const token = sessionStorage.getItem('token');
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Password />} />
          <Route
            path="/"
            element={
              token === "i am authenticated person" ? (
                <CardPage />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
