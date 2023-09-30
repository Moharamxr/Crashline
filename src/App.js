// import logo from './logo.svg';
import "./App.css";
import Login from "./components/Auth/login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Auth/Register/Register";
import SplashScreen from "./components/static/splashScreen/SplashScreen";

function App() {
  
  return (
    <>
      
        
      
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
