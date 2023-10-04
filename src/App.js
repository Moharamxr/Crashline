import "./App.css";
import Login from "./components/Auth/login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Auth/Register/Register";
import SplashScreen from "./components/UI/splashScreen/SplashScreen";
import Feed from "./components/UI/feed/Feed";
import Profile from "./components/UI/profile/Profile";
import Layout from "./components/UI/layout/Layout";
import Posts from "./components/UI/posts list/Posts";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/feed" element={<Feed />} />
        <Route path="/feed">
          <Route index element={<Feed />} />
          <Route path="details/:id" element={<Posts />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/createPost" element={<Feed />} />
      </Routes>
    </Layout>
  );
}

export default App;
