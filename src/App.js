import "./App.css";
import Login from "./components/Auth/login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Auth/Register/Register";
import SplashScreen from "./components/static/splashScreen/SplashScreen";
import Feed from "./components/UI/feed/Feed";
import Sidebar from "./components/UI/sidebar/Sidebar";
import Profile from "./components/UI/profile/Profile";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/feed" element={<Sidebar />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/createPost" element={<Feed />} />
        
      </Routes>
    </>
  );
}

export default App;
